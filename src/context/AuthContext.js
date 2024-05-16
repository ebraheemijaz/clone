// ** React Imports
import { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem('accessToken')
      if (storedToken) {
        // setLoading(true)
        setUser(JSON.parse(window.localStorage.getItem('userData')))
        setLoading(false)
        // await axios
        //   .get(authConfig.meEndpoint, {
        //     headers: {
        //       Authorization: storedToken
        //     }
        //   })
        //   .then(async response => {
        //     setLoading(false)
        //     setUser({ ...response.data.userData })
        //   })
        //   .catch(() => {
        //     localStorage.removeItem('userData')
        //     localStorage.removeItem('refreshToken')
        //     localStorage.removeItem('accessToken')
        //     setUser(null)
        //     setLoading(false)
        //     if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
        //       router.replace('/login')
        //     }
        //   })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loginFE = (params, errorCallback) => {
    console.log(authConfig.loginEndpoint, params)
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async response => {
        console.log('This is response data of login', response.data)
        params.rememberMe ? window.localStorage.setItem('accessToken', response.data.jwt) : null
        // const returnUrl = router.query.returnUrl;
        const _user = { ...response.data.user, role: 'admin' }
        setUser(_user)
        // console.log('Users data',user)
        console.log('User', user)
        params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(_user)) : null
        // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        // console.log('redirect URL', redirectURL)
        router.replace('/dashboards/companies')
      })
      .catch(err => {
        console.log(err)
        if (errorCallback) errorCallback(err)
      })
  }

  const handleSignup = async (params, errorCallback) => {
    axios
      .post(authConfig.signupEndpoint, params)
      .then(async response => {
        console.log('This is response data', response.data)
        setUser({ ...response.data, role: 'admin' })
        window.localStorage.setItem('userData', JSON.stringify({ ...response.data, role: 'admin' }))
        window.localStorage.setItem('accessToken', response.data.jwt)
        router.replace('/dashboards/companies')
      })
      .catch(err => {
        console.log(err)
        toast.error(err?.response?.data?.message || 'Something went wrong')
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    loginFE: loginFE,
    signup: handleSignup,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }

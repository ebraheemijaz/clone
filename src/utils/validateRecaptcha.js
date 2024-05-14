import axios from 'axios'

export const validateRecaptcha = async gRecaptchaToken => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  let res
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`
  try {
    res = await axios.post('https://www.google.com/recaptcha/api/siteverify', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  } catch (e) {
    return false
  }

  if (res && res.data?.success && res.data?.score > 0.5) {
    console.log('res.data?.score:', res.data?.score)
    return true
  } else {
    return false
  }
}

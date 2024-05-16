import axios from 'axios'
import { encrypt } from 'src/utils/encryption'
import { validateRecaptcha } from 'src/utils/validateRecaptcha'

export default async function handler(req, res) {
  if (validateRecaptcha(req.body.code)) {
    try {
      req.body.username = req.body.email
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://0.0.0.0:1337/api/auth/local/register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: req.body // Use req.body to access form data
      }
      const response = await axios.request(config)
      res.status(200).json({
        email: response.data.user.email,
        name: response.data.user.name,
        token: encrypt(response.data.jwt)
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal Server Error', message: error?.response?.data?.error?.message })
    }
  } else {
    res.status(400).json({ error: 'Invalid data' })
  }
}

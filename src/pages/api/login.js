import axios from 'axios'
import { encrypt } from 'src/utils/encryption'
import { validateRecaptcha } from 'src/utils/validateRecaptcha'

export default async function handler(req, res) {
  if (validateRecaptcha(req.body.code)) {
    try {
      req.body.identifier = req.body.email

      const config = {
        method: 'post',
        url: `${process.env.STRAPI_URL}/api/auth/local`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: req.body // Use req.body to access form data
      }
      const response = await axios.request(config)
      res.status(200).json({
        user: { id: response.data.user.id, name: response.data.user.name, email: response.data.user.email },
        jwt: encrypt(response.data.jwt)
      })

      // console.log(JSON.stringify(response.data.jwt))
      // console.log(response.data)
      // console.log('Backend', req.body)
      // res.status(200).json({ success: 'Successfully Logged In', response: response.data })
    } catch (error) {
      // console.error(error.message);
      // console.error(error.data);
      console.error(error.response)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(400).json({ error: 'Invalid data' })
  }
}

import axios from "axios"

export default async function handler(req, res) {
    try {
        await axios.post('http://localhost:1337/api/auth/local', {})
    } catch (error) {
        console.log(error)
    }
    const data = req.body
    const id = 1;
    res.status(200).json({ id })
}


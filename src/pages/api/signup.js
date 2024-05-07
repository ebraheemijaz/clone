import axios from "axios"

export default async function handler(req, res) {
    console.log(req.body)
    try {
        req.body.username = req.body.email;
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://0.0.0.0:1337/api/auth/local/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: req.body // Use req.body to access form data
        };

        const response = await axios.request(config)
        console.log(JSON.stringify(response.data))
        res.status(200).json({})
    } catch (error) {
        // console.error(error.message);
        // console.error(error.data);
        console.error(error.response);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

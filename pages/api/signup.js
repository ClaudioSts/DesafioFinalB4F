//Sign Up - POST
export default function signupHandler(req, res) {
    if (req.method === 'POST') {
        res.status(201) //sucess created new Account (save to Mongo)
    } else {
        res.status(404)
    }
}

//Sign Up - POST
//URL - /api/signup
//DTO
//req: {itsUser: boolean, userName: string, companyName: string, NIF: number, email: string, password: string}
//res: status(201) { req + userID or companyID }
export default function signupHandler(req, res) {
    if (req.method === 'POST') {
        if(itsUser === true){
            res.status(201) //sucess created new user Account (save to Mongo)
        }else {
            res.status(201) //sucess created new company Account (save to Mongo)
        }
    } else {
        res.status(404)
    }
}

//Sign Up - POST
//URL - /api/signup/user
//DTO
//req: {userName: string, email: string, password: string, acceptsTerms: boolean}
//res: status(201) { req + userID }
import { validateFields } from "../../../src/services/validations"
import { addUser } from "../../../src/data/SignUpLogin/users"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            username,
            email,
            password,
            passwordConfirmation
        } = req.body
        const validation = await validateFields(req.body)
        if (validation.success) {
            const id = await addUser({
                username,
                email,
                password,
                passwordConfirmation
            })
            res.status(201)
                .json({
                    "message": "Utilizador Criado com Sucesso!",
                    "_id": `${id}`
                })
        } else {
            res.status(400).json({
                "message": "Os dados introduzidos não são válidos.",
                "errors": validation.errors
            })
        }
    } else {
        res.status(404)
    }
}

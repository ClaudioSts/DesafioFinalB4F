//Sign Up - POST
//URL - /api/signup/company
//DTO
//req: {companyName: string, NIF: number, email: string, password: string, acceptsTerms: boolean}
//res: status(201) { req + companyID }

import { validateFields } from "../../../src/services/validations"
import { addCompany } from "../../../src/data/SignUpLogin/companies"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            username,
            email,
            NIF,
            password,
            passwordConfirmation
        } = req.body

        const validation = await validateFields(req.body)
        if (validation.success) {
            const id = await addCompany({
                username,
                email,
                NIF,
                password,
                passwordConfirmation
            })
            res.status(201)
                .json({
                    "message": "Conta Criada com Sucesso!",
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

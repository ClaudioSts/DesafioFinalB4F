//Login - POST
//URL - /api/login/company
//DTO
//req: {email: string, password: string}
//res: status(200), {id: ObjectID}

import { checkMatchPassword, getCompanyByEmail } from "../../../src/data/SignUpLogin/companies"
import { addSessionCompany } from "../../../src/data/SignUpLogin/companySession"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            email,
            password
        } = req.body

        const user = await getCompanyByEmail(email)
        if (!user) {
            return res
                .status(404)
                .json({
                    "message": "A conta não foi encontrada!"
                })
        }
        const pass = await checkMatchPassword(email, password)
        if (!pass) {
            return res
                .status(401)
                .json({
                    "message": "A password introduzida é inválida!"
                })
        }

        const token = await addSessionCompany(user._id)
        res.status(200)
            .json({ token: token, username: user.username})

    } else {
        res.status(404)
    }
}

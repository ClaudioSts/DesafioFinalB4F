//Login - POST
//URL - /api/login/user
//DTO
//req: {email: string, password: string}
//res: status(200), {id: ObjectID}

import { checkMatchPassword, getUserByEmail } from "../../../src/data/SignUpLogin/users"
import { addSessionUser } from "../../../src/data/SignUpLogin/userSessions"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            email,
            password
        } = req.body

        const user = await getUserByEmail(email)
        if (!user) {
            return res
                .status(404)
                .json({
                    "message": "O utilizador não foi encontrado!"
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

        const token = await addSessionUser(user._id)
        res.status(200)
            .json({ token: token, username: user.username })

    } else {
        res.status(404)
    }
}

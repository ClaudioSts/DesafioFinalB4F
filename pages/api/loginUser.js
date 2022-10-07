//Login - GET
//DTO
//req: {email: string, password: string}
//res: status(200), {id: ObjectID}

export default function loginUserHandler(req, res) {
    if (req.method === 'GET') {
        res.status(200) //sucess logged in (get info from User in Mongo)
    } else {
        res.status(404)
    }
}

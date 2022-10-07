//Login - GET
//URL - /api/login/company
//DTO
//req: {email: string, password: string}
//res: status(200), {id: ObjectID}

export default function loginCompanyHandler(req, res) {
    if (req.method === 'GET') {
        res.status(200) //sucess logged in (get info from Companies in Mongo)
    } else {
        res.status(404)
    }
}

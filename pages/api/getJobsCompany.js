//Get alls jobs from a specific company - GET
//URL - /api/jobs/:companyID
//DTO
//req: {}
//res: status(200) {header: string, description: string, CompanyID: ObjectID}

export default function loginUserHandler(req, res) {
    if (req.method === 'GET') {
        res.status(200) //sucess list all jobs (get info from companyID in Mongo)
    } else {
        res.status(404)
    }
}

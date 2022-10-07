//Post a new job - POST
//URL - /api/company/:companyID/:job
//DTO
//req: {header: string, description: string, CompanyID: ObjectID}
//res: status(201)

export default function loginUserHandler(req, res) {
    if (req.method === 'POST') {
        res.status(201) //sucess add to that CompanyID jobs (get info from companyID in Mongo)
    } else {
        res.status(404)
    }
}

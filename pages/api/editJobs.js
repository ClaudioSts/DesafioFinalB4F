//Edit job - PUT
//URL - /api/jobs/:companyID/:jobOffer
//DTO
//req: {header: string, description: string, CompanyID: ObjectID, offerID: ObjectID}
//res: status(200) {header: string, description: string, CompanyID: ObjectID}

export default function loginUserHandler(req, res) {
    if (req.method === 'PUT') {
        res.status(200) //sucess edit the specific job (get info from companyID in Mongo)
    } else {
        res.status(404)
    }
}

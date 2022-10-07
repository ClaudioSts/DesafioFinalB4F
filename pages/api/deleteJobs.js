//Delete job - DELETE
//URL - /api/jobs/:companyID/:jobOffer
//DTO
//req: {CompanyID: ObjectID, offerID: ObjectID}
//res: status(200) {}

export default function loginUserHandler(req, res) {
    if (req.method === 'DELETE') {
        res.status(200) //sucess delete specific job (get info from companyID in Mongo)
    } else {
        res.status(404)
    }
}

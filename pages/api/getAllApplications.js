//Get alls applications from a specific user - GET
//URL - /api/user/:userID/
//DTO
//req: {}
//res: status(200) {header: string, description: string, CompanyID: ObjectID, applicationID: objectID}

export default function loginUserHandler(req, res) {
    if (req.method === 'GET') {
        res.status(200) //sucess list all applications from that user (get info from userID in Mongo)
    } else {
        res.status(404)
    }
}

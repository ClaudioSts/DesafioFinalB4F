//Change application - PUT
//URL - /api/user/:userID/applications/:applicationID
//DTO
//req: {cv: string or file, userID: ObjectID, offerID: ObjectID, applicationID: ObjectID, username: string, userEmail: string}
//res: status(200)

export default function loginUserHandler(req, res) {
    if (req.method === 'PUT') {
        res.status(200) //sucess change application (get info from userID in Mongo)
    } else {
        res.status(404)
    }
}
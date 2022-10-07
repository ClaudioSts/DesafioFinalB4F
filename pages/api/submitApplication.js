//Add CV to applications - POST
//URL - /api/user/:userID/:offerID
//DTO
//req: {cv: string or file, userID: ObjectID, offerID: ObjectID, username: string, userEmail: string}
//res: status(200) {applicationID: ObjectID}

export default function loginUserHandler(req, res) {
    if (req.method === 'POST') {
        res.status(200) //sucess add CV to user (get info from userID in Mongo)
    } else {
        res.status(404)
    }
}

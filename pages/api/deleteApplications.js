//Delete application - DELETE
//URL - /api/user/:userID/applications/:applicationID
//DTO
//req: {userID: ObjectID, applicationID: ObjectID}
//res: status(200)

export default function loginUserHandler(req, res) {
    if (req.method === 'DELETE') {
        res.status(200) //sucess delete application (get info from userID in Mongo)
    } else {
        res.status(404)
    }
}
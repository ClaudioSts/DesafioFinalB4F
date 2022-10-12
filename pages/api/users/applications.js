import { ObjectId } from "mongodb";
import { getSessionByToken } from "../../../src/data/SignUpLogin/userSessions";
import { createApplication, findAllApplications } from "../../../src/services/applications";


export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSessionByToken(req.headers["authorization"])
    const jobs = await findAllApplications(session.userId);
    res.status(200).json(jobs); //sucess list all jobs (get info from companyID in Mongo)
  } else {
    res.status(404);
  }
  if (req.method === "POST") {
    // console.log(ObjectId.isValid(req.headers["authorization"]))
    const session = await getSessionByToken(req.headers["authorization"])
    const _id = await createApplication(req.body, session.userId)
    res.status(201).json({ _id })
  } else {
    res.status(404)
  }
}
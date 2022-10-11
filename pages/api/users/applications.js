import { getSessionByToken } from "../../../src/data/SignUpLogin/userSessions";
import { createApplication, findAllApplications } from "../../../src/services/applications";


export default async function handler(req, res) {
  if (req.method === "GET") {
    const jobs = await findAllApplications();
    res.status(200).json(jobs); //sucess list all jobs (get info from companyID in Mongo)
  } else {
    res.status(404);
  }
  if (req.method === "POST") {
    const user = await getSessionByToken(req.header("authorization"))
    const _id = await createApplication(req.body, user._id)
    res.status(201).json({ _id })
  } else {
    res.status(404)
  }
}
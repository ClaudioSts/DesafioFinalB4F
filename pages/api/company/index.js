//Get alls jobs from a specific company - GET
//URL - /api/jobs/:companyID
//DTO
//req: {}
//res: status(200) {header: string, description: string, CompanyID: ObjectID}

import { getSessionByTokenC } from "../../../src/data/SignUpLogin/companySession";
import { createJob, findAllJobs, findAllJobsByID } from "../../../src/services/jobs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSessionByTokenC(req.headers["authorization"])
    const jobs = await findAllJobsByID(session.companyId);
    res.status(200).json(jobs); //sucess list all jobs (get info from companyID in Mongo)
  } else {
    res.status(404);
  }
  if (req.method === "POST") {
    const session = await getSessionByTokenC(req.headers["authorization"])
    const _id = await createJob(req.body, session.companyId)
    res.status(201).json({ _id })
  } else {
    res.status(404);
  }
}

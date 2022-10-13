//Get alls jobs from a specific company - GET
//URL - /api/jobs/:companyID
//DTO
//req: {}
//res: status(200) {header: string, description: string, CompanyID: ObjectID}

import { getSessionByTokenC } from "../../../src/data/SignUpLogin/companySession";
import { changeJobById, createJob, deleteJobById, findAllJobs, findAllJobsByID } from "../../../src/services/jobs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSessionByTokenC(req.headers["authorization"])
    console.log('session', session)
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
  if (req.method === "DELETE") {
    const session = await getSessionByTokenC(req.headers["authorization"])
    const _id = await deleteJobById(req.body._id)
    res.status(200).json({ _id })
  } else {
    res.status(400);
  }
  if (req.method === "PUT") {
    const jobOffer = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location
    }
    const _id = await changeJobById(jobOffer, req.body._id)
    res.status(201).json({ _id })
  } else {
    res.status(404);
  }
}

import { createApplication, findAllApplications } from "../../../src/services/applications";


export default async function handler(req, res) {
    if (req.method === "GET") {
      const jobs = await findAllApplications();
      res.status(200).json(jobs); //sucess list all jobs (get info from companyID in Mongo)
    } else {
      res.status(404);
    }
    if (req.method === "POST") {
      const _id = await createApplication(req.body)
      res.status(201).json({ _id})
    } else {
      res.status(404)
    }
  }
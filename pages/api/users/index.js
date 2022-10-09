import { findAllJobs } from "../../../src/services/jobs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jobs = await findAllJobs();
    res.status(200).json(jobs); //sucess list all jobs (get info from companyID in Mongo)
  } else {
    res.status(404);
  }
}

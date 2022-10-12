//Get alls jobs from a specific company - GET
//URL - /api/jobs/:companyID
//DTO
//req: {}
//res: status(200) {header: string, description: string, CompanyID: ObjectID}

import { getSessionByTokenC } from "../../../src/data/SignUpLogin/companySession";
import { createJob, findAllJobs } from "../../../src/services/jobs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jobs = await findAllJobs();
    res.status(200).json(jobs); //sucess list all jobs (get info from companyID in Mongo)
  } else {
    res.status(404);
  }
  if (req.method === "POST") {
<<<<<<< HEAD
    const company = await getSessionByTokenC(req.headers(req.authorization));
    console.log(company);
    if (company) {
      const _id = await createJob(req.body, company._id);
      res.status(201).json({ _id });
    } else {
      res.status(404);
=======
    const company = await getSessionByTokenC(req.headers(req.authorization))
    console.log(company)
    if(company){
      const _id = await createJob(req.body, company._id)
    res.status(201).json({ _id})
    } else {
      res.status(404)
>>>>>>> 43a8bb5cf44a38f54de4f2725decc59961cbce4a
    }
  } else {
    res.status(404);
  }
}

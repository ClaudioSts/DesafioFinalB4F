import { ObjectId } from "mongodb";
import { getSessionByTokenC } from "../../../../src/data/SignUpLogin/companySession";
import { findAllApplications, findApplicationByJobId } from "../../../../src/services/applications";
import { findAllJobsByID } from "../../../../src/services/jobs";


export default async function handler(req, res) {

  if (req.method === "GET") {
    const session = await getSessionByTokenC(req.headers["authorization"])
    if (!session) res.status(403)

    console.log('sessions', session)
    const job = await findAllJobsByID(session.companyId);

    console.log('job', job)
  

    const applications = []
    for (const application of job) {
      const appl = await findApplicationByJobId(application._id)
      console.log('job', appl)
      applications.push(appl)
    }

    res.status(200).json(applications);
  } else {
    res.status(404);
  }
}
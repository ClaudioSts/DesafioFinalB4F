import { getSessionByToken } from "../../../src/data/SignUpLogin/userSessions";
import {
  createApplication,
  findAllApplications,
} from "../../../src/services/applications";
import multer from "multer";
import { getUserById } from "../../../src/data/SignUpLogin/users";


export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSessionByToken(req.headers["authorization"]);
    if (!session) res.status(403)
    const jobs = await findAllApplications(session.userId);
    res.status(200).json(jobs);
  } else {
    res.status(404);
  }


/* 
  if (req.method === "POST") {

    const upload = multer({ dest: "uploads/" });
    const answer = await correMiddleware(
      req,
      res,
      upload.single("ficheiro-do-frontend")
    );

    console.log(req.body.companyJobID)

    const filename = req.file.filename;
    const cv = req.file.originalname;

    const session = await getSessionByToken(req.headers["authorization"]);

    if (!session) res.status(403)

    const jobId = req.query["id"].toString()
    console.debug("id", jobId)
    console.log('filename', filename)
    console.log('cv', cv)

    await createApplication({ filename, cv, jobId }, session.userId);
    res.status(201);
  } else {
    res.status(404);
  } */
}

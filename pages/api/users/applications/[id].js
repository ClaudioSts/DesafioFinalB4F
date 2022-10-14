import { getSessionByToken } from "../../../../src/data/SignUpLogin/userSessions";
import { changeApplicationById, createApplication, deleteApplicationById, findApplicationById } from "../../../../src/services/applications";
import { findJobById } from "../../../../src/services/jobs";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export function correMiddleware(req, res, middleware) {
  return new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}



export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!ObjectId.isValid(req.params.id)) {
      return res.sendStatus(404);
    }
    const application = await findApplicationById(req.params.id);
    if (!application) {
      return res.status(404);
    }
    res.status(200).json(application);
  }

  if (req.method === "PATCH") {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(404);
    }
    const application = await changeApplicationById(req.body, req.params.id);
    if (!application) {
      return res.status(404);
    }
    res.status(200);
  }

  if (req.method === "DELETE") {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(404);
    }
    const deleteApplication = await deleteApplicationById(req.params.id);
    if (deleteApplication.deletedCount === 0) {
      return res.status(404);
    }
    res.status(200);
  }

  if (req.method === "POST") {
    
    const jobId = await findJobById(req.query.id);


    const upload = multer({ dest: "uploads/" });
    const answer = await correMiddleware(
      req,
      res,
      upload.single("ficheiro-do-frontend")
    );
    const jobID = jobId._id
    const filename = req.file.filename;
    const cv = req.file.originalname;

    const session = await getSessionByToken(req.headers["authorization"]);

    if (!session) res.status(403)

    //const jobId = req.body.jobId


    await createApplication({ filename, cv, jobID }, session.userId);
    res.status(201);
  } else {
    res.status(404);
  }

}

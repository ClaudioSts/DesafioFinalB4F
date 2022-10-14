import { getSessionByToken } from "../../../../src/data/SignUpLogin/userSessions";
import { changeApplicationById, createApplication, deleteApplicationById, findApplicationById } from "../../../../src/services/applications";
import { findJobById } from "../../../../src/services/jobs";

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
    console.log(application);
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

    const jobOffer = await findJobById(req.params.id);
    console.log(req.body.companyJobID)

    const upload = multer({ dest: "uploads/" });
    const answer = await correMiddleware(
      req,
      res,
      upload.single("ficheiro-do-frontend")
    );



    const filename = req.file.filename;
    const cv = req.file.originalname;

    console.log('jobofferid', jobOffer)
    const session = await getSessionByToken(req.headers["authorization"]);

    if (!session) res.status(403)

    const jobId = req.body.jobId
    console.log('filename', filename)
    console.log('cv', cv)

    await createApplication({ filename, cv, jobId }, session.userId);
    res.status(201);
  } else {
    res.status(404);
  }

}

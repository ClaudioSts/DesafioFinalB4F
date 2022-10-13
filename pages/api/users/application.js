import { getSessionByToken } from "../../../src/data/SignUpLogin/userSessions";
import {
  createApplication,
  findAllApplications,
} from "../../../src/services/applications";
import multer from "multer";
import { getUserById } from "../../../src/data/SignUpLogin/users";

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
    const jobs = await findAllApplications();
    res.status(200).json(jobs);
  } else {
    res.status(404);
  }

  if (req.method === "POST") {
    const upload = multer({ dest: "uploads/" });
    console.debug("file", req.file)
    console.debug("files", req.files)
    console.debug("body", req.body)
    const answer = await correMiddleware(
      req,
      res,
      upload.single("ficheiro-do-frontend")
    );

    const filename = req.file.filename;
    const cv = req.file.originalname;

    const session = await getSessionByToken(req.headers["Authorization"]);

    if (!session) res.status(403)

    const companyJobID = req.body.companyJobID
    
    await createApplication({ filename, cv, companyJobID }, session.userId);
    res.status(201);
  } else {
    res.status(404);
  }
}

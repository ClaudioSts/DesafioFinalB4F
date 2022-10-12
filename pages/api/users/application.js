import { getSessionByToken } from "../../../src/data/SignUpLogin/userSessions";
import {
  createApplication,
  findAllApplications,
} from "../../../src/services/applications";
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
    const jobs = await findAllApplications();
    res.status(200).json(jobs);
  } else {
    res.status(404);
  }
  if (req.method === "POST") {
    const upload = multer({ dest: "uploads/" });

    const answer = await correMiddleware(
      req,
      res,
      upload.single("ficheiro-do-frontend")
    );

    const filename = req.file.filename;
    const cv = req.file.originalname;

    console.log(cv);

    await createApplication({ filename, cv });
    res.status(201);
  } else {
    res.status(404);
  }
}

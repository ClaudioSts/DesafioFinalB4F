import { changeApplicationById, deleteApplicationById, findApplicationById } from "../../../../src/services/applications";



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
  }
  
import {
  changeJobById,
  deleteJobById,
  findJobById,
} from "../../../../src/services/jobs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!ObjectId.isValid(req.params.id)) {
      return res.sendStatus(404);
    }
    const jobOffer = await findJobById(req.params.id);
    if (!jobOffer) {
      return res.status(404);
    }
    res.status(200).json(jobOffer);
  }

  if (req.method === "PATCH") {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(404);
    }
    const jobOffer = await changeJobById(req.body, req.params.id);
    console.log(jobOffer);
    if (!jobOffer) {
      return res.status(404);
    }
    res.status(200);
  }

  if (req.method === "DELETE") {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(404);
    }
    const deleteJob = await deleteJobById(req.params.id);
    if (deleteJob.deletedCount === 0) {
      return res.status(404);
    }
    res.status(200);
  }
}

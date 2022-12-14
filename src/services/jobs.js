import { getAllJobs, getAllJobsByID, getAllJobsByJobID, getJobById, insertJob, removeJobById, updateJobById } from "../data/companyJobs/companyJobs"


async function findAllJobsByID(companyId) {
    const jobOffer = await getAllJobsByID(companyId)
    return jobOffer
}
async function findAllJobsByJobID(jobID) {
    const jobOffer = await getAllJobsByJobID(jobID)
    return jobOffer
}

async function findAllJobs() {
    const jobOffer = await getAllJobs()
    return jobOffer
}

async function findJobById (id) {
    const jobOffer = await getJobById(id)
    return jobOffer
}

async function createJob(jobOffer, companyId) {
    const createdJobOffer = await insertJob(jobOffer, companyId)
    return createdJobOffer
}

async function changeJobById(jobOffer, id) {
    const offer = await updateJobById(jobOffer, id)
    return offer
}

async function deleteJobById(id) {
    const offer = await removeJobById(id)
    return offer
}

export {
    findAllJobs,
    findJobById,
    createJob,
    changeJobById,
    deleteJobById,
    findAllJobsByID,
    findAllJobsByJobID
}
import { getAllJobs, getJobById, insertJob, removeJobById, updateJobById } from "../data/companyJobs/companyJobs"


async function findAllJobs() {
    const jobOffer = await getAllJobs()
    return jobOffer
}

async function findJobById (id) {
    const jobOffer = await getJobById(id)
    return jobOffer
}

async function createJob(jobOffer) {
    const createdJobOffer = await insertJob(jobOffer)
    return createdJobOffer.insertedId
}

async function changeJobById(jobOffer, id) {
    const jobOffer = await updateJobById(jobOffer, id)
    return jobOffer
}

async function deleteJobById(id) {
    const jobOffer = await removeJobById(id)
    return jobOffer
}

export {
    findAllJobs,
    findJobById,
    createJob,
    changeJobById,
    deleteJobById
}
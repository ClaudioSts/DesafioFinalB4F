import { getAllJobs, getJobById, insertJob, removeJobById, updateJobById } from "../data/companyJobs/companyJobs"


async function findAllJobs() {
    const jobOffer = await getAllJobs()
    return jobOffer
}

async function findJobById (id) {
    const jobOffer = await getJobById(id)
    return jobOffer
}

async function createJob(newJobOffer) {
    const createdJobOffer = await insertJob(newJobOffer, companyId)
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
    deleteJobById
}
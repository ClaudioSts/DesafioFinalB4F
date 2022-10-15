import { getAllJobsByID } from "../data/companyJobs/companyJobs"
import { getAllApplications, getApplicationById, getApplicationByJobId, insertApplication, removeApplicationById, updateApplicationById } from "../data/userApplications/userApplications"


async function findAllApplications(userId) {
    const application = await getAllApplications(userId)
    return application
}
/* async function findAllAppl() {
    const application = await getAllAppl()
    return application
} */

async function findApplicationById (id) {
    const application = await getApplicationById(id)
    return application
}

async function findApplicationByJobId(id) {
    const application = await getApplicationByJobId(id)
    return application
}

async function createApplication(application, userId) {
    const createdApplication = await insertApplication(application, userId)
    return createdApplication
}

async function changeApplicationById(application, id) {
    const applications = await updateApplicationById(application, id)
    return applications
}

async function deleteApplicationById(id) {
    const DeleteApplication = await removeApplicationById(id)
    return DeleteApplication
}

export {
    findAllApplications,
    findApplicationById,
    createApplication,
    changeApplicationById,
    deleteApplicationById,
    findApplicationByJobId
}
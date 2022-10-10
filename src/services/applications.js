import { getAllApplications, getApplicationById, insertApplication, removeApplicationById, updateApplicationById } from "../data/userApplications/userApplications"


async function findAllApplications() {
    const application = await getAllApplications()
    return application
}

async function findApplicationById (id) {
    const application = await getApplicationById(id)
    return application
}

async function createApplication(application) {
    const createdApplication = await insertApplication(application)
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
    deleteApplicationById
}
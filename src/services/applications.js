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
    return createdApplication.insertedId
}

async function changeApplicationById(application, id) {
    const application = await updateApplicationById(application, id)
    return application
}

async function deleteApplicationById(id) {
    const application = await removeApplicationById(id)
    return application
}

export {
    findAllApplications,
    findApplicationById,
    createApplication,
    changeApplicationById,
    deleteApplicationById
}
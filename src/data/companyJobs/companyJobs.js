import { getMongoCollection } from "../mongodb"
import { ObjectId } from "mongodb"

const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "companyJobs"


async function getAllJobs() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
}

async function getJobById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(id) })
}

async function insertJob(jobOffer, companyID) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.insertOne({...jobOffer, companyID})
}

async function updateJobById(jobOffer, id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...jobOffer } })
}

async function removeJobById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.deleteOne({ _id: new ObjectId(id) })
}




export {
    getAllJobs,
    getJobById,
    insertJob,
    updateJobById,
    removeJobById
}


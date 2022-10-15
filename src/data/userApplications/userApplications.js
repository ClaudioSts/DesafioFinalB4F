import { getMongoCollection } from "../mongodb"
import { ObjectId } from "mongodb"

const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "userApplications"


async function getAllApplications(userId) {
    // console.log(userId)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find({ userID: userId }).toArray()
}

/* async function getAllAppl() {
    // console.log(userId)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
} */

async function getApplicationById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(id) })
}

async function getApplicationByJobId(jobID) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ jobID: new ObjectId(jobID) })
}

async function insertApplication(application, userID) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.insertOne({ ...application, userID })
}

async function updateApplicationById(application, id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...application } })
}

async function removeApplicationById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.deleteOne({ _id: new ObjectId(id) })
}




export {
    getAllApplications,
    getApplicationById,
    insertApplication,
    updateApplicationById,
    removeApplicationById,
    getApplicationByJobId
}
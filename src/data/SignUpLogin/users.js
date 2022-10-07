import { getMongoCollection } from "../mongodb"


const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "users"

async function getUserByEmail(userEmail) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ userEmail })
    return resultado
}
async function getUserById(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ _id: userId })
    return resultado
}

async function checkMatchPassword(userEmail, password) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({
        $and:
            [{ userEmail, password }]
    })
    return resultado
}

async function addUser(user) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const result = await collection.insertOne(user)
    return result.insertedId
}

async function checkIfEmailExists(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const result = await collection.find({ email }).toArray()
    return result
}

async function findUser(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.findOne({ _id: id })
}

export {
    getUserByEmail,
    addUser,
    checkIfEmailExists,
    findUser,
    checkMatchPassword,
    getUserById
}
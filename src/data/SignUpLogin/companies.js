import { getMongoCollection } from "../mongodb"


const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "companies"

async function getCompanyByEmail(companyEmail) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ companyEmail })
    return resultado
}
async function getUserById(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ _id: userId })
    return resultado
}

async function checkMatchPassword(companyEmail, password) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({
        $and:
            [{ companyEmail, password }]
    })
    return resultado
}

async function addCompany(company) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const result = await collection.insertOne(company)
    return result.insertedId
}

async function checkIfEmailExists(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const result = await collection.find({ email }).toArray()
    return result
}

async function findCompany(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.findOne({ _id: id })
}

export {
    getCompanyByEmail,
    addCompany,
    checkIfEmailExists,
    findCompany,
    checkMatchPassword,
    getUserById
}
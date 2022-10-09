import { getMongoCollection } from "../mongodb"

const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "companies"

async function getCompanyByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ email })
    return resultado
}
async function getCompanyById(companyId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ _id: companyId })
    return resultado
}

async function checkMatchPassword(email, password) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({
        $and:
            [{ email, password }]
    })
    return resultado
}

async function addCompany(company) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const result = await collection.insertOne(company)
    return result.insertedId
}

async function checkIfCompanyEmailExists(email) {
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
    checkIfCompanyEmailExists,
    findCompany,
    checkMatchPassword,
    getCompanyById
}
import { ObjectId } from "mongodb"
import { generateToken } from "../services/common"
import { getMongoCollection } from "../mongodb"
import { getCompanyByEmail } from "../companies"

const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "CompanySession"

export default async function addSessionCompany(companyId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const token = await collection.insertOne({ companyId })
    return token.insertedId
}

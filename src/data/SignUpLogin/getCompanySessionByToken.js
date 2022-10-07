import { ObjectId } from "mongodb"
import { generateToken } from "../services/common"
import { getMongoCollection } from "../mongodb"
import { getCompanyByEmail } from "./companies"

const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "CompanySession"

export default async function getSessionByToken(token) {
    if (!ObjectId.isValid(token)) return null
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const resultado = await collection.findOne({ _id: new ObjectId(token) })
    return resultado
}
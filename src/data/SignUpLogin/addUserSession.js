import { ObjectId } from "mongodb"
import { generateToken } from "../services/common"
import { getMongoCollection } from "../mongodb"
import { getUserByEmail } from "../users"

const DB_NAME = "DesafioFinal"
const COLLECTION_NAME = "UserSession"

export default async function addSessionUser(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const token = await collection.insertOne({ userId })
    return token.insertedId
}

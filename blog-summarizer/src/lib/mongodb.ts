import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI! as string
const options = {}



let client: MongoClient
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
let clientPromise: Promise<MongoClient>

declare global {
  // Allow global variable in Node.js context
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options)
  global._mongoClientPromise = client.connect()
}

clientPromise = global._mongoClientPromise

export default clientPromise

// /app/api/save-blog/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI as string
const client = new MongoClient(uri)

export async function POST(req: NextRequest) {
  try {
    const { link, content, title } = await req.json()

    if (!link || !content) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }
    //fixed

    await client.connect()
    const db = client.db('blog-summarizer')
    const collection = db.collection('articles')

    const result = await collection.insertOne({ link, title, content, createdAt: new Date() })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch  {
    console.error('MongoDB Save Error:')
    return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 })
  } finally {
    await client.close()
  }
}

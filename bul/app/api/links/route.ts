import { NextResponse } from 'next/server'

let links: { id: number; url: string; title: string }[] = []

export async function GET() {
  return NextResponse.json(links)
}

export async function POST(request: Request) {
  const { url, title } = await request.json()
  const newLink = { id: Date.now(), url, title }
  links.push(newLink)
  return NextResponse.json(newLink, { status: 201 })
}


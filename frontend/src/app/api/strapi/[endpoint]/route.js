import { NextResponse } from "next/server";


export async function GET(req, res) {
  const route = res.params.endpoint
  const url = `http://localhost:1337/api/${route}`
  const strapi = await fetch(url)
  const strapires = await strapi.json()
  return NextResponse.json({"Route": route, "URL": url, "Strapi-Response": strapires})
}
import { SECRET_MAPBOX_API_ACCESS_TOKEN } from "$env/static/private";


export async function GET() {
  return new Response(
    JSON.stringify({ privateKey: SECRET_MAPBOX_API_ACCESS_TOKEN }),{headers: {
      'Content-Type': 'application/json'},
      status: 202
    })
}
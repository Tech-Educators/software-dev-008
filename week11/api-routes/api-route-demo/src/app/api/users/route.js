export async function GET(request) {
    return new Response(JSON.stringify({message: 'new user created'}))
}
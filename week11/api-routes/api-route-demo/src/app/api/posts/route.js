export async function GET(request) {
    // console.log(request.nextUrl.searchParams)
    if (request.nextUrl.searchParams.has('something')) {
        return new Response(JSON.stringify({message: 'You queried for something. like the word something'}))
    }
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await res.json()
    return new Response(JSON.stringify(posts))
}

export async function POST(request) {
    const requestInfo = await request.body
    console.log(requestInfo)
    // insert new data
    return new Response(JSON.stringify({message: 'user added'}))
}

export async function DELETE() {
    // delete some data
}

export async function PUT() {
    // put new data
}
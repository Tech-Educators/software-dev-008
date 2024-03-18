
// we know that an object is passed to next.js page.js files - that object has two things
// {params: {slug: 'something'}, searchParams : {key: string}}

type routeParams = {
    params: {
        slug: string
    }
}

export default function Page({params}: routeParams) {
    console.log(params.slug)
    return (
        <div>
            <h2>These are the route params! You are here: {params.slug} </h2>
        </div>
    )
}

/* {
  params: { slug: 'the-elder-scrolls-iii-morrowind' },
  searchParams: {}
}
*/

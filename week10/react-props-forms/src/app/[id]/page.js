export async function generateMetadata({params}) {
    // sql query for ino

    return {
        title: `Samss book app | ${params.id}`,
        description: 'pretend this is unique!'
    }
}
export default function Page({params}) {

    return (
        <div>
           <p>{params.id}</p>
        </div>
    )
}
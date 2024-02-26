export default function Page({params}) {
    return (
        <p>This is a dynamic route inside another one! {params.name}</p>
    )
}
export default function Page(something) {

    return (
        <div>
            <h2>This route accpets anything after /pets!</h2>
            <p>{something.params.unicorns}</p>
        </div>
    )
}
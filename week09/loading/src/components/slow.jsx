async function delay(timoute) {
    return new Promise((resolve) => {
        setTimeout(resolve, timoute)
    })
}

export default async function SlowComponent() {
    await delay(5000)

    return (
        <div>
            <p className="text-lime-400">I am very slow, but I'm here now! At last! Huzzah!</p>
        </div>
    )
}
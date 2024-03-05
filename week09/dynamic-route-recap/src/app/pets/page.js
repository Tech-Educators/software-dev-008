import Link from "next/link"

export default function Page() {
    const data = [
        {"id": 1, "type": "dog", "name": "Buddy"},
        {"id": 2, "type": "cat", "name": "Whiskers"},
        {"id": 3, "type": "rabbit", "name": "Fluffy"},
        {"id": 4, "type": "bird", "name": "Tweety"},
        {"id": 5, "type": "fish", "name": "Goldie"}
    ]

    return (
        <div>
            {data.map(pet => (
                <div key={pet.id}>
                    <h2>Type: {pet.type}</h2>
                    <p>Name: {pet.name}</p>
                    <Link href={`/pets/${pet.type}`}>Learn more</Link>
                </div>
            ))}
        </div>
    )
}
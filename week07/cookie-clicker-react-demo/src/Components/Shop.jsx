import { shopItems, a} from "./stores";


export default function Shop({purchaseItem}) {
    return (
        <div>
            {shopItems.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.cps}</p>
                    <p>{item.cost}</p>
                    <button onClick={() => purchaseItem(item)}>Buy Item</button>
                </div>
            ))}
        </div>
    )
}
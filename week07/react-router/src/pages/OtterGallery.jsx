import { otters } from "../stores/otters";
import Otter from "./Otter";

// some buttons to be able to sort by asc, decing, none
// click on an otter and see some more info about that. 

export default function OtterGallery() {
    return (
        <div className="otter-container">
            {otters.map(otter => (
                    <Otter otter={otter}/>
            ))}
        </div>
    )
}
import { Link, Navigate } from "react-router-dom"
import { findOtterBySlug } from "../stores/otters"


import { useParams, Outlet } from "react-router-dom"

export function OtterDetails() {

    let { otter } = useParams()

    const otterInfo = findOtterBySlug(otter)

    console.log(otterInfo)
    if (!otterInfo) {
        return <Navigate to='/not-found' replace={true} />
    }

    return (
            <div>
                 <Outlet />
                <h2>Otter slug: {otter}</h2>
                <p>{otterInfo.name}</p>
                <p> Scientific Name: {otterInfo.scientificName}</p>
                <img src={otterInfo.image} />
                <p>Location: {otterInfo.location}</p>
                <p>Diet: {otterInfo.diet}</p>
                <p>Size: {otterInfo.size}</p>

                <Link to='conservation'><p>Conservation {otterInfo.conservationStatus}</p></Link>

            </div>
    )
}
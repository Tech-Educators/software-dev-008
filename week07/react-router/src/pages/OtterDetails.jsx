import { Link, Navigate } from "react-router-dom"
import { findOtterBySlug } from "../stores/otters"


import { useParams, Outlet } from "react-router-dom"

export function OtterDetails() {

    // useParams returns an object: whatever the dyanic route (so after the :) is called is the property name of that object - the value of that that proprty is whatever is in the url. . 

    // '/otters/:id' 
    // /otters/dfasdf-sdfsdf
    // /otters/smooth-coat
    // /otters/sam-is-cool
    // /otters/this%20is%20a%20valid%20URL
    const { id } = useParams()

    // lets say the user visited /otters/smooth-coat
    // id = 'smooth-coat'
    const otterInfo = findOtterBySlug(id)

    console.log(otterInfo)
    if (!otterInfo) {
        // naviagtes the user to a not-found page, and replaces the browser history with the non found page (instead of the invalid link)
        return <Navigate to='/not-found' replace={true} />
    }

    return (
            <div>
                <Outlet />

                <h2>Otter slug: {id}</h2>
                <p>{otterInfo.name}</p>
                <p> Scientific Name: {otterInfo.scientificName}</p>
                <img src={otterInfo.image} />
                <p>Location: {otterInfo.location}</p>
                <p>Diet: {otterInfo.diet}</p>
                <p>Size: {otterInfo.size}</p>

                <Link to='conservation'><p>Conservation {otterInfo.conservationStatus}</p></Link>
                {/* //otters/smooth-coat/conservation */}
                {/* //otters/smooth-coat/ */}
            </div>
    )
}
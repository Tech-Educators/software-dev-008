import { Suspense } from "react";
import SlowComponent from "@/components/slow";

export default function Page() {
    return (
        <div>
            <p>i am the fast. very fast. yes.</p>
            <Suspense fallback={<p>Loading... i promise... eventually...</p>}>
                <SlowComponent />
            </Suspense>
        </div>
    )
}
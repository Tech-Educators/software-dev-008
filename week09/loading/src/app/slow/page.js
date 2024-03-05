import SlowComponent from "@/components/slow";

export default function Page() {
    return (
        <div>
            <p>This is a very slow page.... The whole thing is delayed, even though I'm a very fast p tag!</p>
            <SlowComponent/>
        </div>
    )
}
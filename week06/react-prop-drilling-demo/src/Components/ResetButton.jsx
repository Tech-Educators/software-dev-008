export default function ResetButton({functiontoChangeCount}) {
    console.log
    return (
        <>
        <button onClick={() => functiontoChangeCount(0)}>Reset Counter</button>
        </>
    )
}




// button.addEventListener('click', () => {
//     alert('Hello!')
// })
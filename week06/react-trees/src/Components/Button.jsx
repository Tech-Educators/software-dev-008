export default function Button() {

    function handleClick() {
        console.log('You clicked the second button')
    }
    return (
        <div>
            <button onClick={() => alert('You also clicked me!')}>I don't do anything</button>
            <button onClick={handleClick}>I do something!</button>
            <div on></div>
        </div>
    )
}

// button.addEventListener('click', alert('something'))
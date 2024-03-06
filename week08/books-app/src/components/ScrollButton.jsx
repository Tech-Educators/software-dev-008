export default function ScrollButton({children, action, scroll}) {
    return (
       <>
       {/* TODO: clean this spaghetti*/}
        <button onClick={() => {
            scroll == 0 ? action(2) : action(scroll - 1)
        }}>
            Left
        </button>
            {children}
        <button onClick={() => {
            scroll < 2 ? action(scroll + 1) : action(0)
        }}>Right</button>
       </>
    )
}

/books/4
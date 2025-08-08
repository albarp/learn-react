export default function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..."/>
            <label style={{display:"block"}}>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}
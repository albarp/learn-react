import Item from "./Item";

export default function PackingList() {
    return (
        <section>
            <h1>Alberto Todo</h1>
            <ul>
                <Item name="book" isPacked={false}/>
                <Item name="phone" isPacked={false}/>
                <Item name="umbrella" isPacked={false}/>
            </ul>
        </section>
    )
}
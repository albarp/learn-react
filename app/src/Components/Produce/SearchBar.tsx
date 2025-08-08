export default function SearchBar(
    { 
        filterText, 
        isInStockOnly, 
        onFilterTextChange,
        onInStockOnlyChange
    }: 
    { 
        filterText: string, 
        isInStockOnly: boolean, 
        onFilterTextChange: (val: string) => void 
        onInStockOnlyChange: (val: boolean) => void
    }) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search..." 
                value={filterText}
                onChange={ (e) => onFilterTextChange(e.target.value) } 
            />
            <label style={{ display: "block" }}>
                <input 
                    type="checkbox" 
                    checked={isInStockOnly} 
                    onChange={ (e) => onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}
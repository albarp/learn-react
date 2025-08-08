import { useState } from 'react';
import produceData from './ProduceMock.json'
import ProduceTable from './ProduceTable'
import SearchBar from './SearchBar'

export default function ProduceFilterableTable() {

    const [filterText, setFilterText] = useState("");
    const [isInStockOnly, setIsInStockOnly] = useState(false);

    return(
        <div>
            <SearchBar 
                filterText={filterText} 
                isInStockOnly={isInStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setIsInStockOnly}
            />
            <ProduceTable 
                produces={produceData}
                filterText={filterText}
                isInStockOnly={isInStockOnly}
            />
        </div>
    )
}
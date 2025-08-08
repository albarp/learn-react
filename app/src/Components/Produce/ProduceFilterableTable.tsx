import produceData from './ProduceMock.json'
import ProduceTable from './ProduceTable'
import SearchBar from './SearchBar'

export default function ProduceFilterableTable() {
    return(
        <div>
            <SearchBar/>
            <ProduceTable produces={produceData}/>
        </div>
    )
}
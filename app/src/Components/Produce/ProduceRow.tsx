import type Produce from './Produce'

export function ProduceRow({produce}: {produce: Produce}){
    const name = produce.stocked ? produce.name : 
        <span style={{color: 'red'}}>
            {produce.name}
        </span>

        return (
            <tr>
                <th>{name}</th>
                <th>{produce.price}</th>
            </tr>
        )
}
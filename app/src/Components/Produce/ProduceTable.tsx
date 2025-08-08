import type { JSX } from 'react'
import type Produce from './Produce'
import ProduceCategoryRow from './ProduceCategoryRow'
import { ProduceRow } from './ProduceRow'

export default function ProduceTable ({produces}: {produces: Produce[]}) {

    let lastCategory: string | null = null
    const produceRows: JSX.Element[] = []

    produces.forEach( p => {

        if(p.category !== lastCategory) {
            produceRows.push(
                <ProduceCategoryRow category={p.category}/>
            )
            lastCategory = p.category
        }

        produceRows.push(
            <ProduceRow produce={p} />
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {produceRows}
            </tbody>
        </table>
    )


}
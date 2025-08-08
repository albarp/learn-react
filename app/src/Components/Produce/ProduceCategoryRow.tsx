export default function ProduceCategoryRow( {category}: {category: string}) {
    return (
        <tr>
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    )
}
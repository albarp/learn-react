import type { JSX } from "react";
import type Produce from "./Produce";
import ProduceCategoryRow from "./ProduceCategoryRow";
import { ProduceRow } from "./ProduceRow";

export default function ProduceTable({
  produces,
  filterText,
  isInStockOnly,
}: {
  produces: Produce[];
  filterText: string;
  isInStockOnly: boolean;
}) {
  let lastCategory: string | null = null;
  const produceRows: JSX.Element[] = [];

  produces.forEach((p) => {
    if (p.name.toLowerCase().indexOf(filterText) === -1) return;

    if (isInStockOnly && !p.stocked) return;

    if (p.category !== lastCategory) {
      produceRows.push(<ProduceCategoryRow category={p.category} />);
      lastCategory = p.category;
    }

    produceRows.push(<ProduceRow produce={p} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{produceRows}</tbody>
    </table>
  );
}

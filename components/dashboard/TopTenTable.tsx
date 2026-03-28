import { columns, Payment } from "../tables/Column";
import { DataTable } from "../tables/DataTable";

const payments: Payment[] = [
  {
    name: "John Doe",
    total_packages: 10,
    total_price: 100,
  },
  {
    name: "Jane Doe",
    total_packages: 20,
    total_price: 200,
  },
];
function TopTenTable() {
  return <DataTable columns={columns} data={payments} />;
}

export default TopTenTable;

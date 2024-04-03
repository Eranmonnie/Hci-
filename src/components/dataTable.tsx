import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DropdownSettings from "./dropDown-settings";

const DataTable = () => {
  return (
    <div className="p-10 ">
      <Table>
        <TableCaption>List of submitted projets</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Supervisor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>score</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>

          {/* make loop from db for peojects done by this person  */}

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Dr Mitami</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>80</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Paid</TableCell>

            <TableCell>
              <DropdownSettings />
            </TableCell>

          </TableRow>

        </TableBody>
        {/* loop ends */}
      </Table>
    </div>
  );
};

export default DataTable;

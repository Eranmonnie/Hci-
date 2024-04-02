import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Settings, Trash, Wrench } from "lucide-react";

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
        <TableBody>
            {/* make loop from db for peojects done by this person  */}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Dr Mitami</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>80</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="w-5 h-5 text-blue-700">
                    <Settings />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="left">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Wrench className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash className="mr-2 h-4 w-4 text-rose-500" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;

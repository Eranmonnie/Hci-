import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EyeIcon, Settings, Trash, Wrench } from "lucide-react";
const DropdownSettings = () => {
  return (
    <div>
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
            <EyeIcon className="mr-2 h-4 w-4" />
            <span>view</span>
          </DropdownMenuItem>
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
    </div>
  );
};

export default DropdownSettings;

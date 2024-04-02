import React from "react";
import ActionTooltip from "@/components/action-tooltip";

import { Check, File, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


const SideNav = () => {
  return (
    <div className="h-full">
      <div className="w-[55px] h-[607px] z-30 bg-[#140DBD] flex flex-col gap-5 pt-4 border-t border-t-white">
        <ScrollArea className="flex-1 w-full">
          <ActionTooltip side="right" align="center" label="submit a proposal">
            <button
              className="group flex items-center"
              // onClick={()=>{onOpen("createServer")}}
            >
              <div className="flex mx-3 h-[30px] w-[30px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                <Plus
                  className="group-hover:text-white transition text-[#140DBD]"
                  size={25}
                />
              </div>
            </button>
          </ActionTooltip>

          <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto my-4" />

          <ActionTooltip side="right" align="center" label="view submissions">
            <div className="mb-4">
              <button
                className="group flex items-center"
                // onClick={()=>{onOpen("createServer")}}
              >
                <div className="flex mx-3 h-[30px] w-[30px] rounded-sm group-hover:rounded-sm  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                  <File
                    className="group-hover:text-white transition text-[#140DBD]"
                    size={25}
                  />
                </div>
              </button>
            </div>
          </ActionTooltip>

          <ActionTooltip side="right" align="center" label="view certificates">
            <div className="mb-4">
              <button
                className="group flex items-center"
                // onClick={()=>{onOpen("createServer")}}
              >
                <div className="flex mx-3 h-[30px] w-[30px] rounded-sm group-hover:rounded-sm  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                  <Check
                    className="group-hover:text-white transition text-[#140DBD]"
                    size={25}
                  />
                </div>
              </button>
            </div>
          </ActionTooltip>

        </ScrollArea>
       
      </div>
    </div>
  );
};

export default SideNav;

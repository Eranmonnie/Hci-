import React from "react";
import ActionTooltip from "@/components/action-tooltip";

import { Check, File, FileQuestion, Plus, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useModal } from "@/hooks/use-modal-store";

interface SidebarParams {
  accountType: string | undefined;
}

const SideNav = ({ accountType }: SidebarParams) => {
  const {onOpen} = useModal()
  return (
    <div className="h-full">
      <div className="w-[55px] h-full bg-[#140DBD] flex flex-col gap-5 pt-4 border-t border-t-white">
        <ScrollArea className="flex-1 w-full">
          {accountType == "1" && (
            <div>
              <ActionTooltip
                side="right"
                align="center"
                label="submit a proposal"
              >
                <button className="group flex items-center"
                onClick={()=>{onOpen("upload")}}
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
            </div>
          )}

          {accountType == "1" && (
            <ActionTooltip side="right" align="center" label="view submissions">
              <div className="mb-4">
                <Link to={`/dashboard/projects/1`}>
                  <button className="group flex items-center">
                    <div className="flex mx-3 h-[30px] w-[30px] rounded-sm group-hover:rounded-sm  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                      <File
                        className="group-hover:text-white transition text-[#140DBD]"
                        size={25}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </ActionTooltip>
          )}

          {accountType == "1" && (
            <ActionTooltip
              side="right"
              align="center"
              label="view certificates"
            >
              <div className="mb-4">
                <Link to={`/dashboard/certificates/1`}>
                  <button className="group flex items-center">
                    <div className="flex mx-3 h-[30px] w-[30px] rounded-sm group-hover:rounded-sm  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                      <Check
                        className="group-hover:text-white transition text-[#140DBD]"
                        size={25}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </ActionTooltip>
          )}

          {accountType == "2" && (
            <div>
              <ActionTooltip
                side="right"
                align="center"
                label="review a project"
              >
                <button className="group flex items-center">
                  <div className="flex mx-3 h-[30px] w-[30px] rounded-sm transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                    <FileQuestion
                      className="group-hover:text-white transition text-[#140DBD]"
                      size={25}
                    />
                  </div>
                </button>
              </ActionTooltip>

              <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto my-4" />
            </div>
          )}

          {accountType == "2" && (
            <ActionTooltip side="right" align="center" label="view supervisees">
              <div className="mb-4">
                <Link to={`/dashboard/students/1`}>
                  <button className="group flex items-center">
                    <div className="flex mx-3 h-[30px] w-[30px] rounded-sm group-hover:rounded-sm  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#11111b]">
                      <User
                        className="group-hover:text-white transition text-[#140DBD]"
                        size={25}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </ActionTooltip>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default SideNav;

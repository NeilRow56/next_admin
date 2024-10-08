import { signOut } from "@/auth";
import AppLogo from "../app-logo";

import { Button } from "@/components/ui/button";
import { PowerIcon } from "lucide-react";
import ModeToggle from "./ThemeToggle";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full p-3 mt-2">
      <div>
        <AppLogo />
      </div>

      <div className="flex flex-row grow  space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:mt-8">
        <NavLinks />
        <div className="h-auto items-center w-full grow rounded-md md:block"></div>

        <div className="flex md:flex-col ">
          <ModeToggle />
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground"
            >
              <PowerIcon className="w-6 mr-2" />
              <div className="hidden md:block">Sign Out</div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

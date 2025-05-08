"use client"

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import SkillTestSidebar from "./skill-test-sidebar"
import { Button } from "@/components/ui/button"

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SkillTestSidebar isMobile={true} />
      </SheetContent>
    </Sheet>
  )
}

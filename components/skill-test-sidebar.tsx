"use client"

import Link from "next/link"
import { BarChart, FileText, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface SkillTestSidebarProps {
  className?: string;
  isMobile?: boolean;
}

export default function SkillTestSidebar({ className, isMobile = false }: SkillTestSidebarProps) {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Skill Test",
      href: "/",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Internship",
      href: "/internship",
      icon: <BarChart className="h-5 w-5" />,
    },
  ]

  return (
    <div className={cn(
      "flex-col w-64 border-r bg-white",
      isMobile ? "flex" : "hidden md:flex",
      className
    )}>
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">WhatBytes</h1>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
              pathname === item.href ? "bg-gray-100 text-gray-900 font-medium" : "",
            )}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

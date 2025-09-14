"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BookOpen, Calendar, Users, Store, Settings, Recycle } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Learning", href: "/learning", icon: BookOpen },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Community", href: "/community", icon: Users },
  { name: "Store", href: "/store", icon: Store },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function DashboardLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 block">
        <div className="flex h-16 items-center px-6 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-green-500" />
            <span className="text-lg font-semibold">WasteWise</span>
          </div>
        </div>

        <nav className="mt-6 px-3">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white",
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-3 right-3">
          <Link href="/">
            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="pl-64 min-h-screen">
        <div className="sticky top-0 z-30 flex h-16 items-center border-b border-gray-800 bg-black/50 backdrop-blur-sm px-6">
          <div className="flex flex-1">
            <div className="flex items-center">
              <div className="text-sm text-gray-400">Welcome to WasteWise Dashboard</div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  )
}

import React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/SideBar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            {/* MAIN CONTAINER - FLEX COLUMN ON MOBILE, ROW ON DESKTOP */}
            <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50">

                {/* SIDEBAR - HIDDEN ON MOBILE */}
                <AppSidebar/>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 flex flex-col overflow-auto">

                    {/* HEADER WITH TOGGLE BUTTON */}
                        <SidebarTrigger
                            size="icon"
                            className={"m-5"}
                        />


                    {/* SCROLLABLE CONTENT CONTAINER */}
                    <main className="flex-1 overflow-auto p-4">
                        {/* CONTENT WRAPPER WITH PROPER CONSTRAINTS */}
                        <div className="max-w-[1800px] mx-auto w-full">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}
"use client"

import React, { Suspense, use } from 'react'
import {useQueryState} from "nuqs";
import {EmployeeCardContainerProps} from "@/lib/Props";
import EmployeeCard from "@/components/EmployeeCard";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {IoPersonAdd} from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you're using shadcn/ui

const EmployeesContainer = ({employeesPromise}: {employeesPromise: Promise<any[]>}) => {
    const [search, setSearch] = useQueryState("search", {defaultValue: ""});
    
    // Use the use hook to unwrap the promise
    const employees = use(employeesPromise);
    
    return (
        <>
            <div className="w-full px-4 flex items-center space-x-3">
                <Input placeholder="Search Employees" className="w-full shadow-md"
                       onChange={e => setSearch(e.target.value)} value={search}/>
                <Link href={"/dashboard/addEmployee"}>
                    <div className={"rounded-sm p-2 duration-200 hover:-translate-y-2 border shadow-md"}>
                        <IoPersonAdd/>
                    </div>
                </Link>
            </div>
            <div className="w-full flex flex-col space-y-1">
                {employees.length > 0 ? employees.filter((employee) => {
                    return employee.name.toLowerCase().includes(search.toLowerCase())
                }).map((employee, i) => {
                    return (
                        <EmployeeCard {...employee} key={i}/>
                    )
                }): <h1 className={"text-xl font-medium"}>The Employees will be shown here, when you add them!</h1>}
            </div>
        </>
    )
}

// Loading component
function EmployeesLoading() {
    return (
        <div className="w-full flex flex-col space-y-4">
            <div className="w-full px-4 flex items-center space-x-3">
                <Skeleton className="w-full h-10 rounded-md" />
                <Skeleton className="h-10 w-10 rounded-md" />
            </div>
            {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="w-full h-20 rounded-md" />
            ))}
        </div>
    );
}

export default function EmployeesContainerWrapper({employeesPromise}: {employeesPromise: Promise<any[]>}) {
    return (
        <Suspense fallback={<EmployeesLoading />}>
            <EmployeesContainer employeesPromise={employeesPromise} />
        </Suspense>
    );
}
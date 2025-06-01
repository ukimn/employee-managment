import React from 'react'
import EmployeesContainerWrapper from "@/components/EmployeesContainer";
import {prisma} from "@/lib/prisma";

async function getEmployees(){
    const employees = await prisma.employee.findMany();
    return employees;
}

const Employees = async() => {
    const employeesPromise = getEmployees();
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-md p-8 space-y-4 space-x-4">
                <EmployeesContainerWrapper employeesPromise={employeesPromise} />
            </div>
        </div>
    )
}
export default Employees
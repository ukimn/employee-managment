"use client";

import React, {useState} from 'react'
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {EmployeeCardProps} from "@/lib/Props";
import Image from "next/image";
import {deleteEmployee} from "@/app/actions";
import {formatPrice} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {FaEdit} from "react-icons/fa";
import {MdAttachMoney, MdEmail, MdPhone} from "react-icons/md";
import {FcOnlineSupport} from "react-icons/fc";
import UpdateStatusCard from "@/components/UpdateStatusCard";
import {RiUserLine} from "react-icons/ri";
import { useRouter } from 'next/navigation';

const EmployeeCard = ({id, name, job, status, photo, salary, phone, email}: EmployeeCardProps) => {
    const [editIt, setEditIt] = useState<boolean>(false);
    const router = useRouter();
    return (
        <>
            <Card
                onClick={()=>{router.push(`/dashboard/employees/${id}`)}}
                className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative h-40 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="absolute -bottom-12 left-4">
                        <div
                            className="relative h-24 w-24 border-4 border-white rounded-full overflow-hidden shadow-md">
                            <Image
                                alt="Employee Photo"
                                src={photo}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <CardHeader className="mt-14 px-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl font-bold text-gray-800">{name}</CardTitle>
                            <p className="text-sm text-gray-500">{job}</p>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                        ${status === "Offline" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                        {status === "Offline" ? <RiUserLine className="mr-1"/> : <FcOnlineSupport className="mr-1"/>}
                            {status}
                    </span>
                    </div>
                </CardHeader>

                <CardDescription className="px-6 py-2">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <MdAttachMoney className="text-gray-400 mr-2"/>
                            <span className="text-gray-600">Salary: <span
                                className="font-medium">{formatPrice(salary)}</span></span>
                        </div>
                        <div className="flex items-center">
                            <MdPhone className="text-gray-400 mr-2"/>
                            <span className="text-gray-600">Phone: <span className="font-medium">{phone}</span></span>
                        </div>
                        <div className="flex items-center">
                            <MdEmail className="text-gray-400 mr-2"/>
                            <span className="text-gray-600">Email: <span className="font-medium">{email}</span></span>
                        </div>
                    </div>
                </CardDescription>

                <CardFooter className="px-6 py-4 flex justify-between border-t border-gray-100">
                    <Button
                        variant="destructive"
                        className="hover:shadow-md transition-shadow"
                        onClick={async () => {
                            await deleteEmployee(id)
                        }}
                    >
                        UnEmployee
                    </Button>
                    <Button onClick={() => {
                        setEditIt(prev => !prev)
                    }} className="bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md transition-shadow">
                        <FaEdit className="mr-2"/> Edit Status
                    </Button>
                </CardFooter>
            </Card>
            <div>
                {editIt && <UpdateStatusCard id={id}/>}
            </div>
        </>
    )
}
export default EmployeeCard
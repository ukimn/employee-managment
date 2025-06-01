"use client";

import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {employeeSchema, EmployeeSchemaType} from "@/lib/zodSchemas";
import {addEmployees} from "@/app/actions";

const AddEmployeePage = () => {
    const {register, reset, handleSubmit, formState: {errors, isSubmitting}} = useForm<EmployeeSchemaType>({
        resolver: zodResolver(employeeSchema)
    });

    async function SubmitEmployee(data: EmployeeSchemaType) {
        await addEmployees(data);
        reset();
    }

    return (
        <Card className={"shadow-md"}>
            <CardHeader className={"text-center"}>
                <CardTitle className={"text-3xl font-medium"}>Add Employee</CardTitle>
            </CardHeader>
            <CardContent>
                <form className={"flex flex-col items-center space-y-3"} onSubmit={handleSubmit(SubmitEmployee)}>
                    <div className="grid w-full grid-cols-4 gap-4">
                        <Input className="w-full" placeholder="Name" {...register("name")}/>
                        {errors.name && (
                            <p className={"text-red-600 m-2"}>{errors.name.message}</p>
                        )}
                        <Input className="w-full" type={"number"} placeholder="Salary" {...register("salary")}/>
                        {errors.salary && (
                            <p className={"text-red-600 m-2"}>{errors.salary.message}</p>
                        )}
                        <Input className="w-full" placeholder="Phone Number" {...register("phone")}/>
                        {errors.phone && (
                            <p className={"text-red-600 m-2"}>{errors.phone.message}</p>
                        )}
                        <Input placeholder={"Job"} className="w-full" {...register("job")}/>
                        {errors.job && (
                            <p className={"text-red-600 m-2"}>{errors.job.message}</p>
                        )}
                    </div>
                    <div className={"flex flex-col w-full items-center space-y-3"}>
                        <Input placeholder={"Image Url"} {...register("photo")}/>
                        {errors.photo && (
                            <p className={"text-red-600 m-2"}>{errors.photo.message}</p>
                        )}
                        <Input className="w-full" placeholder="Email" {...register("email")}/>
                        {errors.email && (
                            <p className={"text-red-600 m-2"}>{errors.email.message}</p>
                        )}
                        <Input className="w-full" placeholder={"status"} {...register("status")}/>
                        {errors.status && (
                            <p className={"text-red-600 m-2"}>{errors.status.message}</p>
                        )}
                    </div>
                    <Button disabled={isSubmitting}>Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default AddEmployeePage
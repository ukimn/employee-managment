"use server";
import { EmployeeSchemaType } from "@/lib/zodSchemas";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

export async function addEmployees(employeeData: EmployeeSchemaType) {
  await prisma.employee.create({
    data: {
      name: employeeData.name,
      email: employeeData.email,
      photo: employeeData.photo,
      phone: employeeData.phone,
      status: employeeData.status,
      salary: employeeData.salary,
      job: employeeData.job,
    },
  });
  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
}

export async function deleteEmployee(employeeId: string) {
  await prisma.employee.delete({
    where: {
      id: employeeId,
    },
  });
  revalidatePath("/dashboard/employees");
}

export async function updateEmployeeStatus(employeeId: string, status: string) {
  await prisma.employee.update({
    where: {
      id: employeeId,
    },
    data: {
      status: status,
    },
  });
  revalidatePath("/dashboard/employees");
}

export async function login(
  email: string,
  password: string,
  rememberMe: boolean
) {
  try {
    const { user } = await auth.api.signInEmail({
      body: { email, password, rememberMe },
    });

    if (!user) throw new Error("Authentication failed");

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Login failed" 
    };
  }
}

export async function register(
  email: string,
  password: string,
  name: string
) {
  try {
    const { user } = await auth.api.signUpEmail({
      body: { name, email, password },
    });

    if (!user) throw new Error("Registration failed");

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Registration failed" 
    };
  }
}

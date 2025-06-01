import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaIdBadge,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";
import { formatDate } from "@/lib/utils";

export default async function EmployeePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  async function getEmployeeById() {
    const employee = await prisma.employee.findUnique({
      where: {
        id: id,
      },
    });
    return employee;
  }

  const employee = await getEmployeeById();

  if (!employee) {
    return (
      <div className="w-full flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Employee Not Found
          </h1>
          <p className="text-gray-600">
            The employee you're looking for doesn't exist or may have been
            removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br space-y-3 from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative h-32 w-32 md:h-40 md:w-40 mb-6 md:mb-0 md:mr-8">
                <Image
                  src={employee.photo}
                  alt={`${employee.name}'s photo`}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">{employee.name}</h1>
                <p className="text-indigo-100 text-xl mt-1">{employee.job}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <FaUserTie className="mr-2 text-indigo-600" />
                  Personal Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="mt-1 mr-3 text-indigo-500" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">
                        {employee.email || "Not specified"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <FaPhone className="mt-1 mr-3 text-indigo-500" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">
                        {employee.phone || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaIdBadge className="mt-1 mr-3 text-indigo-500" />
                  <div>
                    <p className="text-sm text-gray-500">Employee ID</p>
                    <p className="text-gray-800">{employee.id}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaCalendarAlt className="mt-1 mr-3 text-indigo-500" />
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="text-gray-800">
                      {formatDate(employee.createdAt)}
                    </p>
                  </div>
                </div>

                {employee.salary && (
                  <div className="flex items-start">
                    <svg
                      className="mt-1 mr-3 text-indigo-500 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="text-gray-800">
                        {formatPrice(employee.salary)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';


interface IFeatureCardProps {
    children: React.ReactNode;
    title: string;
    content: string;
}

interface IPricngCard {
    title: string;
    type: number;
    description: string;
    features: string[];
}

interface IDashboardCardProps {
    title: string;
    description: string;
    content: string;
}

interface EmployeeCardProps {
    name: string;
    job: string;
    status: string;
    photo: string;
    id: string;
    salary: string;
    email: string;
    phone: string;
    createdAt?: string;
}

interface EmployeeCardContainerProps{
    employees: EmployeeCardProps[];
}



export type {IFeatureCardProps, IPricngCard, IDashboardCardProps, EmployeeCardProps, EmployeeCardContainerProps};
import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {prisma} from "@/lib/prisma";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: string): string {
    const FORMAT_PRICE = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    const numericPrice = Number(price);
    const formattedPrice = FORMAT_PRICE.format(numericPrice);

    return formattedPrice;
}

export function formatDate(data: Date): string{
    const date = new Date(data);
    const formattedData = Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: "2-digit",
        day: '2-digit',
    })

    return formattedData.format(date);
}
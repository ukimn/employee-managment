import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {IDashboardCardProps} from "@/lib/Props";



const DashboardCard = ({title, content, description}: IDashboardCardProps) => {
    return (
        <Card className={"w-70 shadow-lg"}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
        </Card>
    )
}
export default DashboardCard

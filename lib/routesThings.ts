interface ILinks{
    id: number;
    name: string;
    route: string;
}

const links: ILinks[] = [
    {
        id: 1,
        name: "Home",
        route: "/"
    },
    {
        id: 3,
        name: "About",
        route: "#about"
    },
    {
        id: 4,
        name: "Pricing",
        route: "#pricing"
    },
    {
        id: 2,
        name: "Dashboard",
        route: "/dashboard"
    }
]

export default links;
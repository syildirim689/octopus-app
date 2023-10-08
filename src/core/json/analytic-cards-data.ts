import {AnalyticCardsDataProps} from "../types";

export const AnalyticCardsData: AnalyticCardsDataProps[] = [
    {
        id: 1,
        title: "Today's Money",
        icon: "/img/icons/dashboard/wallet-icon.svg",
        value: `$${Math.floor(Math.random() * (200000 - 2000 + 1)) + 2000}`,
        percent: Math.floor(Math.random() * 100),
        rate: Math.random() >= 0.5,
    },
    {
        id: 2,
        title: "Today's Users",
        icon: "/img/icons/dashboard/world-icon.svg",
        value: `${Math.floor(Math.random() * (200000 - 2000 + 1)) + 2000}`,
        percent: Math.floor(Math.random() * 100),
        rate: Math.random() >= 0.5,
    },
    {
        id: 3,
        title: "New Clients",
        icon: "/img/icons/dashboard/document-icon.svg",
        value: `+${Math.floor(Math.random() * (200000 - 2000 + 1)) + 2000}`,
        percent: Math.floor(Math.random() * 100),
        rate: Math.random() >= 0.5,
    },
    {
        id: 4,
        title: "Total Sales",
        icon: "/img/icons/dashboard/shopping-cart-icon.svg",
        value: `$${Math.floor(Math.random() * (200000 - 2000 + 1)) + 2000}`,
        percent: Math.floor(Math.random() * 100),
        rate: Math.random() >= 0.5,
    }
];

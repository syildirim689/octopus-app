import {UseFormRegister} from "react-hook-form";
import {InputHTMLAttributes} from "react";
import exp from "constants";

export interface SignInFormData {
    email: string;
    password: string;
    remember: boolean;
}

export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    remember: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
    type: string;
    placeholder?: string;
    label?: string;
    register: UseFormRegister<any>;
}

export interface SwitchProps {
    text: string;
    name: any;
    register: UseFormRegister<any>;
}

export type NavbarDataProps = {
    id: number;
    title: string;
    icon: string;
    url: string;
}

export type DashboardNavbarDataProps = {
    id: number;
    title: string;
    icon: string;
    url: string;
    category: string;
}

export type SocialMediaDataProps = {
    id: number;
    icon: string;
    url: string;
}

export type AnalyticCardsDataProps = {
    id: number;
    title: string;
    icon: string;
    value: string;
    percent: number;
    rate: boolean;
}

export type OrdersOverviewDataProps = {
    id: number;
    title: string;
    date: string;
    icon: string;
}

export type ActiveUsersDataProps = {
    id: number;
    title: string;
    value: string;
    icon?: string;
}

export interface User {
    id: number;
    image: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    company: { department: string; title: string };
    function: { department: string; title: string };
    status: boolean;
    employed: string;
    birthDate: string;
}

export interface Product {
    id: number;
    description: string;
    image: string;
    thumbnail: string;
    status: string;
    companies: string;
    title: string;
    price: number;
    completion: number;
    budget: number;
}

export interface ProjectsProps {
    id: number;
    title: string;
    thumbnail: string;
    image: string;
    images: string[];
    price: number;
    completion: number;
    companies: string;
    budget: number;
    members: string;
}

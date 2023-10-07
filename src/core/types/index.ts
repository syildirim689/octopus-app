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

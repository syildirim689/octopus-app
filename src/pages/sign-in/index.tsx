import React from "react";
import {Helmet} from "react-helmet-async";
import {useForm} from "react-hook-form";
import Input from "../../core/components/form-elements/input";
import Button from "../../core/components/form-elements/buttons";
import Switch from "../../core/components/form-elements/switch";
import Container from "../../core/components/container";
import styles from "./sign-in.module.css";
import {SignInFormData} from "../../core/types";
import {login} from "../../core/functions/login";
import {toast, Toaster} from "react-hot-toast";
import Header from "../../core/layout/header";

export default function SignInPage({appTitle}: { appTitle: string }) {
    if (sessionStorage.getItem("token")) {
        window.location.href = "/";
    }
    const {register, handleSubmit} = useForm<SignInFormData>();
    const onSubmit = async (data: SignInFormData): Promise<void> => {
        await login(data).then((res) => {
            if (res.data.token) {
                sessionStorage.setItem("token", res.data.token);
                toast.success("You are logged in. Please wait...");
                window.location.href = "/";
            }
            console.log(res);
        }).catch(() => {
            toast.error("Wrong email or password");
        });
    }
    const title = "Sign In";
    return (
        <div>
            <Helmet>
                <title>{title} | {appTitle}</title>
            </Helmet>
            <Header/>
            <Toaster/>
            <div className={"grid grid-cols-2 h-screen items-center"}>
                <Container>
                    <div className={"w-full"}>
                        <div className={styles.head}>
                            <h1 className={styles.h1}>Welcome Back</h1>
                            <p className={styles.p}>Enter your email and password to sign in</p>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <Input label={"Email"} name={"email"} type={"text"}
                                   register={register} placeholder={"Your email adress"}/>
                            <Input label={"Password"} name={"password"} type={"password"}
                                   register={register} placeholder={"Your password"}/>
                            <Switch register={register} name={"remember"} text={"Remember me"}/>
                            <Button text={"SIGN IN"} type={"submit"}/>
                        </form>
                    </div>
                    <div className={styles.singUpBlock}>
                        <p className={styles.singUpText}>Don't have an account? <a href={"/sign-up"}
                                                                                   className={styles.link}>Sign
                            up</a></p>
                    </div>
                </Container>
                <div className={styles.logoBlock}>
                    <div className={styles.logoContainer}>
                        <img src={"/img/logo/white-logo.svg"} alt={"Logo"} className={styles.logo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

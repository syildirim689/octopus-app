import styles from './sign-up.module.css';
import {Helmet} from "react-helmet-async";
import Container from "../../core/components/container";
import {Link} from "react-router-dom";
import Input from "../../core/components/form-elements/input";
import React from "react";
import {useForm} from "react-hook-form";
import {SignUpFormData} from "../../core/types";
import Switch from "../../core/components/form-elements/switch";
import Button from "../../core/components/form-elements/buttons";
import {map} from "rambda";
import {SocialMediaData} from "../../core/json/social-media-data";
import {SocialMediaDataProps} from "../../core/types";
import {toast, Toaster} from "react-hot-toast";
import axios from "axios";
import HeaderAlternative from "../../core/layout/header-alternative";

export default function SignUpPage({appTitle}: { appTitle: string }) {
    if (sessionStorage.getItem("token")) {
        window.location.href = "/";
    }
    const {register, handleSubmit} = useForm<SignUpFormData>();
    const onSubmit = async (data: SignUpFormData): Promise<void> => {
        try {
            await axios.post("https://dummyjson.com/users/add", {
                firstName: data.name,
                email: data.email,
                password: data.password,
            }, {
                headers: {'Content-Type': 'application/json'}
            }).then(() => {
                toast.success("You have successfully registered!");
                window.location.href = "/sign-in";
            });
        } catch (error) {
            console.log(error);
            toast("Something went wrong!");
        }
    };
    const title = "Sign Up";
    return (
        <div className={"p-5"}>
            <Helmet>
                <title>{title} | {appTitle}</title>
            </Helmet>
            <HeaderAlternative/>
            <Toaster/>
            <div className={styles.container}>
                <Container className={styles.content}>
                    <div className={styles.section}>
                        <div className={styles.titleBlock}>
                            <h1 className={styles.title}>Welcome!</h1>
                            <p className={styles.p}>Use these awesome forms to login or create new account in your
                                project for free.</p>
                        </div>
                        <div className={styles.formBlock}>
                            <div className={styles.registerBlock}>
                                <h2 className={styles.registerTitle}>Register with</h2>
                                <div className={styles.social}>
                                    {map((item: SocialMediaDataProps) => (
                                        <Link to={"/"} key={item.id} className={styles.socialItem}>
                                            <img src={item.icon} alt={item.icon}/>
                                        </Link>
                                    ), SocialMediaData)}
                                </div>
                            </div>
                            <div className={styles.divider}>or</div>
                            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <Input label={"Name"} name={"name"} type={"text"}
                                       register={register} placeholder={"Your full name"}/>
                                <Input label={"Email"} name={"email"} type={"text"}
                                       register={register} placeholder={"Your email adress"}/>
                                <Input label={"Password"} name={"password"} type={"password"}
                                       register={register} placeholder={"Your password"}/>
                                <Switch register={register} name={"remember"} text={"Remember me"}/>
                                <Button text={"SIGN UP"} type={"submit"}/>
                            </form>
                            <div className={styles.singInBlock}>
                                <p className={styles.singInText}>Already have an account? <a href={"/sign-in"}
                                                                                             className={styles.link}>Sign
                                    in</a></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

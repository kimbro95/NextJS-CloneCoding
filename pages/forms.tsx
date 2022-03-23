import { FieldErrors, useForm } from "react-hook-form";

interface FormType {
    username: string;
    email: string;
    password: string;
}

export default function Forms() {
    const { register, handleSubmit } = useForm<FormType>();
    const onSubmit = (data: FormType) => {
        console.log("Hi onSubmit");
    };
    const onError = (err: FieldErrors) => {
        console.log(err);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        message: "5자 이하임",
                        value: 5,
                    }
                })}
                type="text"
                placeholder="UserName"
            />
            <input
                {...register("email", {
                    required: "Email is required",
                })}
                type="email"
                placeholder="Email"
            />
            <input
                {...register("password", {
                    required: "Password is required",
                })}
                type="password"
                placeholder="Password"
            />
            <input type="submit" value="Create" />
        </form>
    )
}
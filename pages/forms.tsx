import { FieldErrors, useForm } from "react-hook-form";

interface FormType {
    username: string;
    email: string;
    password: string;
    errors?: string;
}

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError,
        setValue,
        reset,
        resetField,
    } = useForm<FormType>({
        mode: "onChange",
    });
    const onSubmit = (data: FormType) => {
        console.log("Hi onSubmit");
        setError("username", { message: "check" })
    };
    const onError = (err: FieldErrors) => {
        //console.log(err);
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
                    validate: {
                        notGmail: (value) => !value.includes("@gmail.com") || "Gmail is not allowed",
                    }
                })}
                type="email"
                placeholder="Email"
            />
            {errors.email?.message}
            <input
                {...register("password", {
                    required: "Password is required",
                })}
                type="password"
                placeholder="Password"
            />
            <br />
            <input type="submit" value="Create" />
            {errors.errors?.message}
        </form>
    )
}
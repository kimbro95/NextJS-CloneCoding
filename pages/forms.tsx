import { useForm } from "react-hook-form";

export default function Forms() {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log("Hi onSubmit");
    };
    const onError = () => {
        console.log("Hi onError");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input
                {...register("username", {
                    required: true,
                })}
                type="text"
                placeholder="UserName"
            />
            <input
                {...register("email", {
                    required: true,
                })}
                type="email"
                placeholder="Email"
            />
            <input
                {...register("password", {
                    required: true,
                })}
                type="password"
                placeholder="Password"
            />
            <input type="submit" value="Create" />
        </form>
    )
}
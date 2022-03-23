import { useForm } from "react-hook-form";

export default function Forms() {
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <form>
            <input
                {...register("username")}
                type="text"
                placeholder="UserName"
                required
            />
            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                required
            />
            <input
                {...register("Password")}
                type="password"
                placeholder="password"
                required
            />
            <input type="submit" value="Create" />
        </form>
    )
}
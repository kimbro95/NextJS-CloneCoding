import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
    label?: string;
    name?: string;
    register: UseFormRegisterReturn;
    [key: string]: any;
}

export default function TextArea({
    label,
    name,
    register,
    ...rest
}: TextAreaProps) {
    return (
        <div>
            {
                label ? (
                    <label
                        htmlFor={name}
                        className="block font-semibold text-sm text-gray-700 mb-1"
                    >
                        {label}
                    </label>
                ) : null
            }
            <textarea
                id={name}
                rows={5}
                {...register}
                {...rest}
                className="w-full shadow-sm rounded-md border-gray-300 mt-1
                focus:ring-orange-500 focus:border-orange-500
                "
            />
        </div>
    )
}
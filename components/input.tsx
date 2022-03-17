interface InputProps {
    label: string;
    name: string;
    kind: "text" | "phone" | "price";
    [key: string]: any;
}

export default function Input({
    label,
    name,
    kind = "text",
    ...rest
}: InputProps) {
    return (
        <div>
            <label
                className="block text-sm font-semibold text-gray-700 mb-1"
                htmlFor={name}
            >
                {label}
            </label>
            {
                kind === "text" ? (
                    <div className="relative flex items-center shadow-sm rounded-md">
                        <input
                            id={name}
                            {...rest}
                            className="appearance-none w-full px-3 py-2
                            border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                ) : null

            }
            {
                kind === "price" ? (
                    <div className="relative flex items-center shadow-sm rounded-md">
                        <div className="absolute pointer-events-none flex justify-center items-center pl-3 left-0 ">
                            <span className="text-gray-500 text-sm">$</span>
                        </div>
                        <input
                            id={name}
                            {...rest}
                            className="appearance-none pl-7 w-full px-3 py-2
                            border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500
                            "
                        />
                        <div className="absolute right-0 flex items-center pointer-events-none pr-3">
                            <span className="text-gray-500">USD</span>
                        </div>
                    </div>
                ) : null
            }
            {
                kind === "phone" ? (
                    <div className="flex rounded-md shadow-sm">
                        <span
                            className="flex items-center justify-center px-3 rounded-l-md
                            border border-r-0 border-gray-300 bg-gray-50 text-gray-500
                            select-none text-sm
                            "
                        >
                            +82
                        </span>
                        <input
                            id={name}
                            {...rest}
                            className="appearance-none w-full px-3 py-2
                            border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500
                            "
                        />
                    </div>
                ) : null
            }
        </div>
    )
}
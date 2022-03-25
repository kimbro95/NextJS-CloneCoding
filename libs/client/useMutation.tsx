import { useState } from "react";

interface UseMutationType{
    loading: boolean,
    data?: object,
    error?: object,
}
type UseMutationResult = [(data:any) => void, UseMutationType];

export default function useMutation(url:string):UseMutationResult{
    const [state, setState] = useState<UseMutationType>({
        loading: false,
        data: undefined,
        error: undefined,
    });
    function mutation(data : any){
        setState((prev) => ({...prev, loading: true}));
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json().catch(() => {}))
        .then((data) => setState((prev) => ({...prev, data})))
        .catch((error) => setState((prev) => ({...prev, error})))
        .finally(() => setState((prev) => ({...prev, loading : false})));
    }
    return [mutation, {...state}];
}
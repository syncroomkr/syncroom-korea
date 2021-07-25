import {useState, FormEvent} from "react";

function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = e;
        setValue(value);
    };

    return { value, onChange };
}

export default useInput;
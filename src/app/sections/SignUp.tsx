'use client';

import { useState } from "react";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; }>({});

    const [submitted, setSubmitted] = useState(false);

    const checkName = (name: string) => {
        return name.trim() !== "";
    }
    const checkEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const checkPassword = (password: string) => {
        return password.length >= 6;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let newErrors: typeof errors = {};

        if (!checkName(name)) newErrors.name = "Name cannot be empty";
        if (!checkEmail(email)) newErrors.email = "Please enter a valid email";
        if (!checkPassword(password)) newErrors.password = "Password must be at leadt 6 characters";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setName("");
            setEmail("");
            setPassword("");
            setTimeout(() => setSubmitted(false), 3000);
        }
        
    } 

    return(
        <section className="section-wrapper flex justify-center">
            <form className="p-12" onSubmit={handleSubmit}>
                <h1>Sign-up with Webbklar</h1>

                <div className="py-4">
                    <h2 className="!text-[18px]">Name</h2>
                    <input
                       type="text"
                       value={name}
                       placeholder="Enter your name here"
                       className={`${errors.name? "border-red-600" : "border-black" } p-4 border w-full rounded-md mt-2`}
                       onChange={(e) => {
                        setName(e.target.value);
                        if(errors.name) setErrors({...errors, name: undefined})}}/>
                </div>
                {errors.name &&
                <p className="text-red-600">{errors.name}</p>}

                <div className="py-4">
                    <h2 className="!text-[18px]">Email</h2>
                    <input
                       type="text"
                       value={email}
                       placeholder="Enter your email here"
                       className={`${errors.email ? "border-red-600" : "border-black" } p-4 border w-full rounded-md mt-2`}
                       onChange={(e) => {
                        setEmail(e.target.value);
                        if(errors.email) setErrors({...errors, email: undefined})}}/>
                       
                </div>
                {errors.email && 
                <p className="text-red-600">{errors.email}</p>}

                <div className="py-4">
                    <span className="flex gap-4">
                       <h2 className="!text-[18px]">Password</h2> 
                       <p className="text-neutral-500">(more than 6 characters)</p>
                    </span>
                    <input
                       type="password"
                       value={password}
                       placeholder="Enter your password here"
                       className={`${errors.password? "border-red-600" : "border-black" } p-4 border w-full rounded-md mt-2`}
                       onChange={(e) => {
                        setPassword(e.target.value);
                        if(errors.password) setErrors({...errors, password: undefined})}}/>
                </div>
                {errors.password && 
                <p className="text-red-600">{errors.password}</p>}

                
                {submitted && 
                 <p className="text-green-700 bg-green-300 py-4 w-full flex justify-center">Form has been submitted!</p>}

                <button 
                    type="submit"
                    className="py-4 bg-black text-white w-full rounded-md mt-12 cursor-pointer">
                    Confirm
                </button>
            </form>
        </section>
    );
}
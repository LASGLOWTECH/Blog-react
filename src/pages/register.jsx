// import axios from "axios";
import instance from "../axios.config";
import { Link, useNavigate } from "react-router-dom";


useNavigate
import { useState } from "react";
import { BsEye } from "react-icons/bs";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        passsword: "",

    })
    const navigate = useNavigate()
    const [err, setErr] = useState(null)
    console.log();

    const handleChange = (e) => {

        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const res = await instance.post("/auth/register", inputs)
            navigate("/login")
            console.log(res);


        } catch (error) {
            setErr(error.res.data)

        }

    }


    console.log(inputs);

    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                    inventore quaerat mollitia?
                </p>

                <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center  text-indigo-600 text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label htmlFor="username">User Name</label>

                        <div className="relative">
                            <input
                                type="prext"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter username"
                                onChange={handleChange}
                                name="username"

                            />


                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                onChange={handleChange}
                                name="email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                onChange={handleChange}
                                name="password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <BsEye />
                            </span>
                        </div>
                    </div>

                    <button onClick={handleSubmit}
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>

                    {err && <p className="text-red-500">{err} </p>}


                    <p className="text-center text-sm text-gray-500">
                        registered?
                        <a className="underline" href="/login">Sign up</a>
                    </p>
                </form>
            </div>
        </div>



    );
}

export default Register;
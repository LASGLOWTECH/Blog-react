// import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { BsEye } from "react-icons/bs";
import { AuthContext } from "../context/authContext";


const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        passsword: "",

    })

    const [err, setErr] = useState(null)
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
   

    const handleChange = (e) => {

        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login(inputs)
            navigate("/")
            console.log(res);


        } catch (error) {
            setErr(error.response.data)

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
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 scr-only p-4 pe-12 text-sm shadow-sm"
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
                        className="block w-full rounded-lg bg-Nature px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>

                    {err && <p className="text-red-500">{err} </p>}


                    <p className="text-center text-sm text-gray-500">
                        registered?
                        <a className="underline" href="/register">Sign up</a>
                    </p>
                </form>
            </div>
        </div>



    );
}

export default Login;
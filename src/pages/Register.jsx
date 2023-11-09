import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../hooks/AuthProvider'
import { updateProfile } from 'firebase/auth'
import Swal from 'sweetalert2'
import { auth } from '../hooks/firebase'

const Register = () => {

    useEffect(() => {
        document.title = 'Hyper | Register';
    }, [])

    const { signUp, setCurrentUser, setLoading, currentUser, updateUser } = useContext(AuthContext)



    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const url = form.url.value
        signUp(name, email, password, url)
            .then((userCredential) => {
                const user = userCredential.user;

                updateUser(name, url)
            }).then(() => {
                setLoading(false)

            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
                console.log(errorMessage);
            }).finally()
    }




    return (


        < div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" >
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Register
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Join Us Today! Create Your Account
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <div>
                        <label htmlFor="email" className="sr-only">Name</label>

                        <div className="relative">
                            <input
                                required
                                type="text"
                                name='name'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Name"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                required
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
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
                                required
                                type="password"
                                name='password'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="url" className="sr-only">Image URL</label>

                        <div className="relative">

                            <input
                                required
                                type="url"
                                name='url'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Image URL"
                            />


                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link replace={true} to='/login' className="underline">Sign In</Link>
                    </p>
                </form>
            </div>
        </div >
    )
}

export default Register
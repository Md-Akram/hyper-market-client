import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddJob = () => {

    useEffect(() => {
        document.title = 'Hyper | Add Job';
    }, [])

    const { currentUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const sellerEmail = form.sellerEmail.value
        const jobTitle = form.jobTitle.value
        const deadline = form.deadline.value
        const shortDescription = form.shortDescription.value
        const category = form.category.value
        const maxPrice = form.maxPrice.value
        const minPrice = form.minPrice.value
        const data = {
            sellerEmail, jobTitle, deadline, shortDescription, category, maxPrice, minPrice
        }
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                toast.success('Successfully added a job!');
                navigate('/myPostedJobs')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 border border-indigo-400">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Add Job</h1>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                    {/* seller email */}

                    <div>
                        <label htmlFor="seller" className="">Email</label>

                        <div className="relative">
                            <input
                                readOnly
                                name='sellerEmail'
                                value={currentUser.email}
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />


                        </div>
                    </div>

                    {/* job title */}

                    <div>
                        <label htmlFor="title" className="">Job Title</label>

                        <div className="relative">
                            <input
                                required
                                name='jobTitle'
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Job Title"
                            />
                        </div>
                    </div>

                    {/* deadline */}

                    <div>
                        <label htmlFor="deadline" className="">Deadline</label>

                        <div className="relative">
                            <input
                                required
                                name='deadline'
                                type="date"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter deadline"
                            />
                        </div>
                    </div>

                    {/* description */}

                    <div>
                        <label htmlFor="OrderNotes" className="">
                            Description
                        </label>

                        <textarea
                            required
                            name='shortDescription'
                            id="OrderNotes"
                            className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                            rows="4"
                            placeholder="Enter description of the job"
                        ></textarea>
                    </div>

                    {/* category */}

                    <div>
                        <label htmlFor="HeadlineAct" className="">
                            Category
                        </label>

                        <select
                            required
                            name="category"
                            id="HeadlineAct"
                            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                        >
                            <option value="">Please select</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphics Design">Graphics Design</option>
                        </select>
                    </div>

                    {/*max price */}

                    <div>
                        <label htmlFor="maxPrice" className="">Maximum Price</label>
                        <div className="relative">
                            <input
                                required
                                name='maxPrice'
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Maximum Price"
                            />
                        </div>
                    </div>

                    {/*min price */}

                    <div>
                        <label htmlFor="minPrice" className="">Minimum Price</label>
                        <div className="relative">
                            <input
                                required
                                name='minPrice'
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Minimum Price"
                            />
                        </div>
                    </div>





                    <div className="flex items-center justify-between">
                        <button
                            // disabled={isDisabled}
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddJob
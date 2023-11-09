import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { AuthContext } from '../hooks/AuthProvider'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'

const JobDetails = () => {

    useEffect(() => {
        document.title = 'Hyper | Job Details';
    }, [])

    const { currentUser } = useContext(AuthContext)

    const [job, setJob] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`https://hyper-market-server.vercel.app/job/${id}`, { credentials: 'include', })
            .then((res) => res.json())
            .then((data) => {

                setJob(data)
                setLoading(false)
            })
    }, [])

    const isDisabled = currentUser?.email == job.sellerEmail

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const bidderprice = form.price.value
        const bidderDeadline = form.date.value
        const bidderEmail = form.bidderEmail.value
        const status = 'pending'
        const { category, deadline, jobTitle, maxPrice, minPrice, sellerEmail, shortDescription } = job
        const data = {
            category, deadline, jobTitle, maxPrice, minPrice, sellerEmail, shortDescription,
            bidderprice,
            bidderDeadline,
            bidderEmail,
            status
        }
        fetch('https://hyper-market-server.vercel.app/bids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert the data object to a JSON string
        })
            .then(res => {
                toast.success('Successfully bidded!');
                navigate('/myBids')
            })
            .catch(err => console.log(err))
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='p-6'>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Job Title</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.jobTitle}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Deadline</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.deadline}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Minimum Price</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.minPrice}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Maximum Price</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.maxPrice}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.shortDescription}</dd>
                    </div>


                </dl>
                <div>

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg text-center">
                            <h1 className="text-2xl font-bold sm:text-3xl">Place your Bid</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                            {/* price */}

                            <div>
                                <label htmlFor="price" className="">Price</label>
                                <div className="relative">
                                    <input
                                        required
                                        name='price'
                                        type="number"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter price"
                                    />
                                </div>
                            </div>

                            {/* deadline */}

                            <div>
                                <label htmlFor="deadline" className="">Deadline</label>

                                <div className="relative">
                                    <input
                                        required
                                        name='date'
                                        type="date"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter deadline"
                                    />
                                </div>
                            </div>

                            {/* bidder email */}

                            <div>
                                <label htmlFor="bidder" className="">Bidder Email</label>

                                <div className="relative">
                                    <input
                                        readOnly
                                        name='bidderEmail'
                                        value={currentUser?.email}
                                        type="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter email"
                                    />


                                </div>
                            </div>

                            {/* seller email */}

                            <div>
                                <label htmlFor="seller" className="">Seller Email</label>

                                <div className="relative">
                                    <input
                                        readOnly
                                        name='sellerEmail'
                                        value={job.sellerEmail}
                                        type="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter password"
                                    />


                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    disabled={isDisabled}
                                    type="submit"
                                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                >
                                    Bid
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
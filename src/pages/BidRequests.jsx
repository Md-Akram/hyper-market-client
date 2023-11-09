import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import toast from 'react-hot-toast'
import Empty from '../components/Empty'

const BidRequests = () => {

    const [jobs, setJobs] = useState([])
    const { currentUser } = useContext(AuthContext)

    const fetcher = () => {
        const email = currentUser.email
        fetch(`http://localhost:5000/bids/bidrequests/${email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }

    useEffect(() => {
        fetcher()
    }, [])

    const handleAccept = (job) => {
        console.log(job);
        const { jobTitle, category, deadline, minPrice, maxPrice, shortDescription, sellerEmail, bidderprice, bidderDeadline, bidderEmail } = job
        const data = {
            jobTitle, category, deadline, minPrice, maxPrice, shortDescription, sellerEmail, bidderprice, bidderDeadline, bidderEmail,
            status: 'in progress'
        }
        fetch(`http://localhost:5000/bids/${job._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Bid Accepted!')
                fetcher()
            })
            .catch(err => console.log(err))
    }

    const handleReject = (job) => {
        console.log(job);
        const { jobTitle, category, deadline, minPrice, maxPrice, shortDescription, sellerEmail, bidderprice, bidderDeadline, bidderEmail } = job
        const data = {
            jobTitle, category, deadline, minPrice, maxPrice, shortDescription, sellerEmail, bidderprice, bidderDeadline, bidderEmail,
            status: 'rejected'
        }
        fetch(`http://localhost:5000/bids/${job._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Bid rejected!')
                fetcher()
            }).catch(err => console.log(err))
    }

    const progressBar = <div>
        <span id="ProgressLabel" className="sr-only">Loading</span>

        <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="75"
            className="block rounded-full bg-gray-200"
        >
            <span
                className="block w-1/4 h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"

            ></span>
        </span>
    </div>

    if (jobs.length == 0) {
        return <Empty />
    }

    return (
        <div className='lg:p-6 h-[70vh]'>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-center">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Job Title
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bidder Email
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bid Price
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Deadline
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Status
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Action
                            </th>
                            {/* <th className="px-4 py-2"></th> */}
                        </tr>
                    </thead>

                    <tbody className="text-center divide-y divide-gray-200">
                        {
                            jobs.map(job => <tr key={job._id}>

                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.jobTitle}</td>

                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.bidderEmail}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.bidderprice}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.deadline}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.status}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    {
                                        job.status == 'pending' ? <><button
                                            onClick={() => handleAccept(job)}
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Accept
                                        </button> <button
                                            onClick={() => handleReject(job)}
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                                Reject
                                            </button> </> : ""
                                    }
                                    {
                                        job.status == 'in progress' ? progressBar : ""
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BidRequests
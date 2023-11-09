import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import toast from 'react-hot-toast'

const MyBids = () => {

    const [jobs, setJobs] = useState([])
    const { currentUser } = useContext(AuthContext)

    const fetcher = () => {
        const email = currentUser.email
        fetch(`http://localhost:5000/bids/mybids/${email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }

    useEffect(() => {
        fetcher()
    }, [])

    const handleClick = (job) => {
        console.log(job);
        const { jobTitle, category, deadline, minPrice, maxPrice, shortDescription, sellerEmail, bidderprice, bidderDeadline, bidderEmail } = job
        const data = {
            jobTitle, category, deadline, minPrice, maxPrice, shortDescription, sellerEmail, bidderprice, bidderDeadline, bidderEmail,
            status: 'complete'
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
                toast.success('job completed!')
                fetcher()
            }).catch(err => console.log(err))
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
                                Seller Email
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

                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.sellerEmail}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.deadline}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{job.status}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    {
                                        job.status == 'in progress' ? <button
                                            onClick={() => handleClick(job)}
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Complete
                                        </button> : ""
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

export default MyBids
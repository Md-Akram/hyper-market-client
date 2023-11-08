import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const JobDetails = () => {

    const [job, setJob] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/job/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setJob(data)
                setLoading(false)
            })
    }, [])

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
                        <dt className="font-medium text-gray-900">Price Range</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.priceRange}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">{job.shortDescription}</dd>
                    </div>


                </dl>
            </div>
        </div>
    )
}

export default JobDetails
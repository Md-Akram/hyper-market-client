import React from 'react'
import { Link } from 'react-router-dom'

const CardWithTwoBtn = ({ job, handleClick }) => {
    const { _id, jobTitle, maxPrice, minPrice, shortDescription, deadline } = job



    return (
        <article className="mt-4 rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
                <div>
                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        {jobTitle}
                    </h3>

                    <p className="mt-1 text-base text-gray-700">
                        {shortDescription}
                    </p>
                    <p className="mt-1 text-base font-medium">Price:{minPrice}-{maxPrice}</p>
                    <p className="mt-1 text-base font-medium">Deadline: {deadline}</p>


                    <Link to={`update/${_id}`}
                        replace
                        className="block w-max mt-4 rounded border border-indigo-500 bg-indigo-500 px-4 py-2 text-lg font-medium text-white"

                    >
                        Update
                    </Link>
                    <button
                        onClick={() => handleClick(_id)}
                        className="block w-max mt-4 rounded border border-indigo-500 bg-indigo-500 px-4 py-2 text-lg font-medium text-white"

                    >
                        Delete
                    </button>
                </div>
            </div>
        </article>

    )
}

export default CardWithTwoBtn
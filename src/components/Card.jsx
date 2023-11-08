import React from 'react'

const Card = ({ job }) => {
    const { id, jobTitle, priceRange, shortDescription, deadline } = job

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
                    <p className="mt-1 text-base font-medium">Price:{priceRange}</p>
                    <p className="mt-1 text-base font-medium">Deadline: {deadline}</p>


                    <button
                        className="mt-2 rounded border border-indigo-500 bg-indigo-500 px-4 py-2 text-lg font-medium text-white"
                    >
                        Bid now
                    </button>
                </div>
            </div>
        </article>

    )
}

export default Card
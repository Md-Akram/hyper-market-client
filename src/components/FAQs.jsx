import React from 'react'

const FAQs = () => {
    return (
        <div className="p-6">
            <h2 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>FAQS</h2>
            <details
                className="mt-4 group border-s-4 border-indigo-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                        How do I post a job on the platform?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Posting a job on our platform is easy. First, create an account or log in if you already have one. Once you're logged in, click on the "Add Job" button. Fill in the required job details, including the job title, description, category, budget, and deadline. After reviewing the information, click "Submit," and your job will be live for freelancers to bid on.
                </p>
            </details>

            <details
                className="mt-4 group border-s-4 border-indigo-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                        How do I select the right freelancer for my job?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    To choose the right freelancer for your job, you can review their profiles, portfolios, and ratings. You can also communicate with freelancers through our messaging system to discuss the project in detail. Ask questions, clarify expectations, and consider their previous work. You may also request proposals or sample work to help make an informed decision.
                </p>
            </details>

            <details
                className="mt-4 group border-s-4 border-indigo-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                        How does the bidding process work for freelancers?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Freelancers can browse available jobs and submit bids to express their interest. When placing a bid, freelancers specify their proposed price and delivery timeline. Job posters can review these bids and select the freelancer they feel best matches their needs. Communication between the job poster and freelancer is encouraged to ensure clarity and successful project completion.
                </p>
            </details>
        </div>
    )
}

export default FAQs
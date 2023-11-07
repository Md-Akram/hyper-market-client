import React from 'react'

const Banner = () => {
    return (

        <section className=" bg-[url(https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWVsYW5jZXxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center bg-no-repeat">

            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[70vh] lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let's Hustle

                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Discover a World of hustle at Your Fingertips! Explore the Best Deals at Our Online Marketplace Today.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner
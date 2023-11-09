import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import BrowseByCategory from '../components/BrowseByCategory'
import Reviews from '../components/Reviews'
import FAQs from '../components/FAQs'

const Home = () => {

    useEffect(() => {
        document.title = 'Hyper | Home';
    }, [])

    return (<>
        <Banner />
        <BrowseByCategory />
        <Reviews />
        <FAQs />
    </>
    )
}

export default Home
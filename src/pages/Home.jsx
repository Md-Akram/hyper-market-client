import React from 'react'
import Banner from '../components/Banner'
import BrowseByCategory from '../components/BrowseByCategory'
import Reviews from '../components/Reviews'
import FAQs from '../components/FAQs'

const Home = () => {
    return (<>
        <Banner />
        <BrowseByCategory />
        <Reviews />
        <FAQs />
    </>
    )
}

export default Home
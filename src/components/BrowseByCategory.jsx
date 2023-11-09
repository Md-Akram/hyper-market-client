import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';
import Loading from './Loading';

const BrowseByCategory = () => {

    const [jobs, setJobs] = useState([])

    const [loading, setLoading] = useState(true)

    const handleClick = (e) => {
        setLoading(true)
        setJobs([])
        const category = e.target.innerText
        fetch(`http://localhost:5000/jobs/${category}`, { credentials: 'include', })
            .then(res => res.json())
            .then((data) => {
                const filteredJobs = data.filter((job) => job.category == category)
                setJobs(filteredJobs)
                setLoading(false)
            })
    }

    useEffect(() => {
        const category = "Web Development"
        fetch(`http://localhost:5000/jobs/${category}`, { credentials: 'include', })
            .then(res => res.json())
            .then((data) => {
                const filteredJobs = data.filter((job) => job.category == category)
                setJobs(filteredJobs)
                setLoading(false)
            })
    }, [])

    return (
        <div className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
            <h2
                className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
                Jobs
            </h2>
            <Tabs>
                <TabList>
                    <Tab onClick={handleClick}>Web Development</Tab>
                    <Tab onClick={handleClick}>Digital Marketing</Tab>
                    <Tab onClick={handleClick}>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                    {loading ? <Loading /> :
                        jobs.map((job) => <Card key={job._id} job={job} />)
                    }
                </TabPanel>
                <TabPanel>
                    {loading ? <Loading /> :
                        jobs.map((job) => <Card key={job._id} job={job} />)
                    }
                </TabPanel>
                <TabPanel>
                    {loading ? <Loading /> :
                        jobs.map((job) => <Card key={job._id} job={job} />)
                    }
                </TabPanel>

            </Tabs>
        </div>
    );

}

export default BrowseByCategory
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const BrowseByCategory = () => {

    const [jobs, setJobs] = useState([])

    const handleClick = (e) => {
        setJobs([])
        const category = e.target.innerText
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {
                const filteredJobs = data.filter((job) => job.category == category)
                setJobs(filteredJobs)
            })
    }

    console.log(jobs);

    return (
        <div className='p-6'>
            <Tabs>
                <TabList>
                    <Tab onClick={handleClick}>Web Development</Tab>
                    <Tab onClick={handleClick}>Digital Marketing</Tab>
                    <Tab onClick={handleClick}>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                    {
                        jobs.map((job) => <Card key={job.id} job={job} />)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        jobs.map((job) => <Card key={job.id} job={job} />)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        jobs.map((job) => <Card key={job.id} job={job} />)
                    }
                </TabPanel>

            </Tabs>
        </div>
    );

}

export default BrowseByCategory
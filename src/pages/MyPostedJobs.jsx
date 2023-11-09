import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import Loading from '../components/Loading'
import CardWithTwoBtn from '../components/CardWithTwoBtn'
import Empty from '../components/Empty'
import Swal from 'sweetalert2'

const MyPostedJobs = () => {

    useEffect(() => {
        document.title = 'Hyper | My Posted Jobs';
    }, [])

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const { currentUser } = useContext(AuthContext)

    const handleClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deletejob/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                    }// Convert the data object to a JSON string
                }).then(res => {
                    console.log(res)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    fetcher()
                }).catch(err => console.log(err))

            }
        });

    }

    const fetcher = () => {
        const email = currentUser.email
        fetch(`http://localhost:5000/jobs/mypostedjobs/${email}`)
            .then(res => res.json())
            .then((data) => {
                setJobs(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetcher()
    }, [])

    if (loading) {
        return <Loading />
    }
    if (jobs.length == 0) {
        return <Empty />
    }

    return (
        <div>{jobs.map(job => <CardWithTwoBtn handleClick={handleClick} key={job._id} job={job} />)}</div>
    )
}

export default MyPostedJobs
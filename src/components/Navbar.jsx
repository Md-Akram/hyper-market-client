import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { Toaster } from "react-hot-toast";




function NavList() {
    const { currentUser, logOut } = useContext(AuthContext)



    const active = 'inline-block rounded border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white'
    const inActive = 'inline-block rounded px-4 py-2 text-sm font-medium text-indigo'

    return (
        <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='/' className={({ isActive }) => isActive ? active : inActive}>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='addJob' className={({ isActive }) => isActive ? active : inActive}>
                    Add Job
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="myPostedJobs" className={({ isActive }) => isActive ? active : inActive}>
                    My Posted Jobs
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='myBids' className={({ isActive }) => isActive ? active : inActive}>
                    My Bids
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='bidRequests' className={({ isActive }) => isActive ? active : inActive}>
                    Bid Requests
                </NavLink>
            </Typography>


            {
                currentUser && <div className="flex flex-row items-center">
                    <Avatar src={currentUser.photoUrl || "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"} />
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        <p className="flex items-center">
                            {currentUser.displayName || "user"}
                        </p>
                    </Typography>
                </div>
            }

            {currentUser ? <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <button onClick={() => logOut()} className={active}>
                    Log Out
                </button>
            </Typography> : <>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <NavLink to='login' className={({ isActive }) => isActive ? active : inActive}>
                        Login
                    </NavLink>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <NavLink to='register' className={({ isActive }) => isActive ? active : inActive}>
                        Register
                    </NavLink>
                </Typography>
            </>}

        </ul>
    );
}

export function NavbarSimple() {


    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className=" max-w-none px-6 py-3">
            <Toaster />
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex flex-row gap-2 items-center">
                    <Avatar src="https://images.pexels.com/photos/6289173/pexels-photo-6289173.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" variant="rounded" />
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                        Hyper Market
                    </Typography>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}


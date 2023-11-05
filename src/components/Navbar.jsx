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

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='/' className="flex items-center hover:text-blue-500 transition-colors">
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='addJob' className="flex items-center hover:text-blue-500 transition-colors">
                    Add Job
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="myPostedJobs" className="flex items-center hover:text-blue-500 transition-colors">
                    My Posted Jobs
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='myBids' className="flex items-center hover:text-blue-500 transition-colors">
                    My Bids
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='bidRequests' className="flex items-center hover:text-blue-500 transition-colors">
                    Bid Requests
                </NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='login' className="flex items-center hover:text-blue-500 transition-colors">
                    Login
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='register' className="flex items-center hover:text-blue-500 transition-colors">
                    Register
                </NavLink>
            </Typography>
            <div className="flex flex-row items-center">
                <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" alt="avatar" variant="rounded" />
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <p className="flex items-center hover:text-blue-500 transition-colors">
                        User Name
                    </p>
                </Typography>
            </div>
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


import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="lg:flex">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="mx-4 lg:hidden my-10">
                            <h1 className="text-3xl font-bold text-center mb-10">Employee Information Management</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-8 rounded-lg">
                                    <div>
                                        <h2 className="text-2xl font-bold">16</h2>
                                        <p className="text-lg font-bold">Employee</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-8 rounded-lg">
                                    <div>
                                        <h2 className="text-2xl font-bold">06</h2>
                                        <p className="text-lg font-bold">Old Employees</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-8 rounded-lg">
                                    <div>
                                        <h2 className="text-2xl font-bold">10</h2>
                                        <p className="text-lg font-bold">New Employees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block lg:w-64 bg-[#D3A256] min-h-screen">
                            <ul className="menu p-5 w-64 fixed">
                                {/* Navbar menu content here */}
                                <li><a><i className="fa-solid fa-house"></i>Admin Home</a></li>
                                <li><a><i className="fa-solid fa-user-plus"></i>Add Employee</a></li>
                                <li><a><i className="fa-solid fa-plus"></i>Add Task</a></li>
                                <div className="divider">OR</div>
                                <li><a><i className="fa-solid fa-arrow-left"></i>Back Home</a></li>
                            </ul>
                        </div>
                        <div className="lg:w-full">
                            <Outlet></Outlet>
                            <div className="hidden lg:block mx-5 my-10">
                                <h1 className="text-3xl font-bold text-center mb-10">Employee Information Management</h1>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg">
                                        <div>
                                            <p className="text-lg font-bold">Total Employee</p>
                                            <h2 className="text-2xl font-bold">16</h2>
                                        </div>
                                    </div>
                                    <div className="text-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] p-8 rounded-lg">
                                        <div>
                                            <p className="text-lg font-bold">Old Employee</p>
                                            <h2 className="text-2xl font-bold">06</h2>
                                        </div>
                                    </div>
                                    <div className="text-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-8 rounded-lg">
                                        <div>
                                            <p className="text-lg font-bold">New Employee</p>
                                            <h2 className="text-2xl font-bold">10</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-5 w-64 min-h-full bg-[#D3A256]">
                        {/* Sidebar content here */}
                        <li><a><i className="fa-solid fa-house"></i>Admin Home</a></li>
                        <li><a><i className="fa-solid fa-user-plus"></i>Add Employee</a></li>
                        <li><a><i className="fa-solid fa-plus"></i>Add Task</a></li>
                        <div className="divider">OR</div>
                        <li><a><i className="fa-solid fa-arrow-left"></i>Back Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
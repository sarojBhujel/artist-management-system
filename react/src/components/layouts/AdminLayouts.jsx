import { Link, Navigate, Outlet } from "react-router-dom";

import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3CenterLeftIcon,
    HomeIcon,
    MusicalNoteIcon,
    PaintBrushIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
} from '@heroicons/react/20/solid'
import { useStateContext } from "../../contexts/contextprovider";

const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
    { name: 'Users', href: '/users', icon: UserGroupIcon, current: false },
    { name: 'Artist', href: '/artists', icon: PaintBrushIcon, current: false },
    { name: 'Albums', href: '/albums', icon: MusicalNoteIcon, current: false },
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AdminLayouts() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const{user,token}=useStateContext()
    if(!token){
        return <Navigate to="/login"></Navigate>
    }
    return (
        <div>
            <div className="min-h-full">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
                                            alt="Easywire logo"
                                        />
                                    </div>
                                    <nav
                                        className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                                        aria-label="Sidebar"
                                    >
                                        <div className="space-y-1 px-2">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-cyan-800 text-white'
                                                            : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>

                                    </nav>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
                                alt="Easywire logo"
                            />
                        </div>
                        <nav className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                            <div className="space-y-1 px-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                                            'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                        </nav>
                    </div>
                </div>

                <div className="flex flex-1 flex-col lg:pl-64">
                    <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        {/* Search bar */}
                        <div className="absolute inset-y-0 right-0 pt-2">

                            <div className="ml-4 flex items-center md:ml-6">


                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="ml-3 hidden text-sm font-medium text-gray-700 md:block">
                                                <span className="sr-only">Open user menu for </span>Admin Name
                                            </span>
                                            <ChevronDownIcon
                                                className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 md:block"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/login"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Logout
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1 pb-8">
                        {/* Page header */}
                        <div className="bg-white shadow">
                            <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                                    Page Header
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
            {/* <Outlet/> */}
        </div>
    )

}
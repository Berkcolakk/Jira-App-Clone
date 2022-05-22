import Head from 'next/head'
import Image from 'next/image'
import Swal from 'sweetalert2'
import Router from 'next/router';
import { faHomeUser, faUserLarge, faBell, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeTopMenuIssueModal } from 'stores/reducers/main/main';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UserProfileMenuChange } from 'stores/reducers/main/navbar';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import Link from 'next/link';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://avatars.githubusercontent.com/u/40931799?s=400&u=9d6ab0283fe5d56197b1b62bc27b42fb97090f16&v=4',
}
const navigation = [
    {
        MenuName: 'Your work', Href: '/Main', Current: true, Type: "MenuItem",
        Children: {
            MenuName: 'Your work', Href: '#', Current: true
        }
    },
    { MenuName: 'Projects', Href: '/Main', Current: false, Type: "MenuItem" },
    { MenuName: 'Filters', Href: '/Issues', Current: false, Type: "MenuItem" },
    { MenuName: 'Dashboards', Href: '/Main', Current: false, Type: "MenuItem" },
    { MenuName: 'People', Href: '/People', Current: false, Type: "MenuItem" },
    { MenuName: 'Apps', Href: '/Apps', Current: false, Type: "MenuItem" },
    { MenuName: 'Create', Href: '/CreateIssue', Current: false, Type: "Button" }
]
const userNavigation = [
    { MenuName: 'Your Profile', Href: '/UserProfile' },
    { MenuName: 'Settings', Href: '/UserSetting' },
    { MenuName: 'Sign out', Href: '/Logout', Type: "Button", Onclick: "UserLogout" },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const UserLogout = e => {
    Swal.fire({
        title: "Are you sure you want to log out?",
        icon: 'question',
        showConfirmButton: true,
        confirmButtonText: 'Logout',
        showDenyButton: true,
        denyButtonText: 'Stay'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Logout', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Not logout', '', 'info')
        }
    })
}
const UserProfileMenu = (props) => {
    return (
        <Menu as="div" className="ml-3 relative">
            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <Image className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" layout="fixed" height={40} width={40} />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.MenuName}>
                            {({ active }) => (
                                <Link key={item.MenuName}
                                    href={item.Href}>
                                    <a key={item.MenuName} className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}>
                                        {item.MenuName}
                                    </a>
                                </Link>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
const LeftMenuBar = () => {
    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                    item.Type == "MenuItem" ?
                        <CreateMenuItem key={item.MenuName} props={item} />
                        : item.Type == "Button" ? <CreateMenuButton key={item.MenuName} props={item} /> : ""
                ))}
            </div>
        </div>
    )
}
const CreateMenuButton = (item) => {
    return (
        <a key={item.props.MenuName} href='' className={classNames(
            item.props.Current
                ? 'bg-gray-900 text-white'
                : 'bg-black-900 text-gray-300 hover:bg-gray-700 hover:text-white',
            'px-3 py-2 rounded-md text-sm font-medium'
        )}>{item.props.MenuName}</a>
    )
}
const CreateMenuItem = (item) => {
    return (
        <Link
            key={item.props.MenuName}
            href={item.props.Href}>
            <a key={item.props.MenuName} className={classNames(
                item.props.Current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium'
            )}
                aria-current={item.props.Current ? 'page' : undefined}>{item.props.MenuName}</a>
        </Link>
    )
}
const UserFirstLogin = (props) => {
    const userFirstLogin = localStorage.getItem("userFirstLogin");
    if (!userFirstLogin) {
        NotificationManager.info('Welcome ' + props?.NameSurname, 'Jira', 1500);
        localStorage.setItem("userFirstLogin", true);
    }
}
const mapStateToProps = state => ({ ...state.Navbar });

const TopMenu = (props) => {
    const dispatch = useDispatch();
    const User = props.props;
    useEffect(() => {
        UserFirstLogin(User);
    })
    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */},
                        <div className="max-w-s mx-auto px-4 sm:px-6 lg:px-8">
                            {/* <div className="flex items-center justify-between h-16"> */}
                            <div className="flex justify-between h-16">
                                {/* <div className="flex items-center"> */}
                                <div className="flex ">
                                    <div className="flex-shrink-0">
                                        <Link href="/Main">
                                            <a>
                                                <Image
                                                    className="h-8 w-8"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" layout="fixed" height={40} width={40}
                                                    alt="Workflow"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <LeftMenuBar />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button
                                            type="button"
                                            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                        </button>
                                        <UserProfileMenu props={User} />
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <div>TEST</div>
                                        ) : (
                                            <div>TEST 2</div>
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
            <NotificationContainer />
        </>
    )
}
export default connect(mapStateToProps)(TopMenu);
import Head from 'next/head'
import Image from 'next/image'
import TopMenu from './_topMenu';
import { GetUser } from '../../services/login/login';

const Layout = () => {
    const User = GetUser();
    return (
        <>
            <TopMenu props={User} />
            <main>

            </main>
            <footer>

            </footer>
        </>
    )
}
export default Layout;
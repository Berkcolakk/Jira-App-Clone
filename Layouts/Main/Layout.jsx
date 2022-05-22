
import Image from 'next/image'
import TopMenu from 'Layouts/Main/TopMenu';
import { GetUser } from 'Services/Login/Login';

const Layout = () => {
    const User = GetUser();
    return (
        <>
            <TopMenu props={User} />
        </>
    )
}
export default Layout;
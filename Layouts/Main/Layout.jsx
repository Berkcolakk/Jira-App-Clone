
import Image from 'next/image'
import TopMenu from 'Layouts/Navbars/TopMenu';
import { GetUser } from 'Services/Base/BaseService';

const Layout = ({children}) => {
    const User = GetUser();
    return (
        <>
            <TopMenu props={User} />
            {children}
        </>
    )
}
export default Layout;
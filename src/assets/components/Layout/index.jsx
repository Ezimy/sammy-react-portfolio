import './index.scss';
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';
function Layout(){
    return(
        <>
            <Navbar />
            <div className='page'>
                <Outlet/>
            </div>
        </>
    )
}
export default Layout;
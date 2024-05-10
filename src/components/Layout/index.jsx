import './index.scss';
import Navbar from '../Navbar'
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
function Layout(){
    return(
        <>
            <Navbar />
            <div className='page'>
                <Outlet/>
            </div>
            <Footer/>

        </>
    )
}
export default Layout;
import './index.scss';
import Navbar from '../Navbar'
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
function Layout(){
    return(
        <>
            <div className='page'>
                <Navbar />
                    <Outlet/>
                <Footer/>
            </div>

        </>
    )
}
export default Layout;
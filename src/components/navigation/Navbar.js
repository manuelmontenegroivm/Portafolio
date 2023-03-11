import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import logo from 'assets/img/LogoMM2.png'
import { useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import SyncLoader from 'react-spinners/SyncLoader'




function Navbar(){
    const [loading, setLoading]=useState(true)
    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }
    const [open, setOpen] = useState(false)
    return(
      <nav id='navbar'className='w-full py-2 top-0 transition duration-300 ease-in-out z-40 fixed' >
        <div className="px-4 sm:px-6">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
            <Link to='/' className="ml-4 mt-2">
              <img
              src={logo} 
              width={150}
              height={130}
              className=""/>
            </Link>
            <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900          border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out  mx-4">Casos</NavLink>
            <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900     border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out  mx-4">Servicios</NavLink>
            <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900      border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out  mx-4">Nosotros</NavLink>
            <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900      border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out  mx-4">Carerras</NavLink>
            <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900          border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out  mx-4">Blog</NavLink>
            <Link to="/contacto"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Contratanos
              <SyncLoader className="ml-3 -mr-1 h-3.5" speedMultiplier={0.4} loading={loading} size={10} color="#f2f2f2" />
            </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

const mapStateToProp=state=>({
    
})

export default connect(mapStateToProp,{

}) (Navbar)
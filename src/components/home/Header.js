import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"


function Header(){

   
    return(
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl xl:pt-40 xl:pb-64 lg:pt-56 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-24 sm:text-center sm:text-7xl">
                            Somos una empresa de desarrollo de software y nos especializamos en
                            <div className="incline-flex" style={{color: '#FFD200', fontWeight: 'bold'}}>
                            <Typewriter
                                words={[' Python', ' Django' , ' React', ' Javascript', ' HTML', ' CSS', ' Oracle SQL']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            </div>
                            </h1>
                            <ul className="flex gap-8 items-center justify-center py-16">
                                <li className="incline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button ">
                                    <Link to='/servicios/algo' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Asesorias
                                    </Link>
                                </li>

                                <li className="incline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button ">
                                    <Link to='/servicios/algo' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Mantenimiento
                                    </Link>
                                </li>

                                <li className="incline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button ">
                                    <Link to='/servicios/algo' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Desarrollo
                                    </Link>
                                </li>

                                <li className="incline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button ">
                                    <Link to='/servicios/algo' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Supervisión 
                                    </Link>
                                </li>

                                <li className="incline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button ">
                                    <Link to='/servicios/algo' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Seguridad
                                    </Link>
                                </li>

                                
                             
                            </ul>

                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                            
                            </p>
                            
                        </div>

                    </div>
                </div>
            </div>
      </main>
    )
}

export default Header
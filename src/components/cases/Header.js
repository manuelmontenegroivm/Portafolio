import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"


function Header(){
    return(
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-20 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                            Case Studies
                            </h1>

                            <p className="mt-6 text-3xl leading-8 text-gray-900 ">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
      </main>
    )
}

export default Header
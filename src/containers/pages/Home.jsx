import Header from "components/home/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Incentives from "components/home/Incentives"
import Cases from "components/home/Cases"
import Features from "components/home/Features"
import Call from "components/home/Call"
import Client  from "components/home/Client"
import Blog from "components/home/Blog"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
               <Header/>
               <Incentives/>
               <Cases/>
               <Features/>
               <Client/>
               <Call/>
               <Blog/>
               
               
            </div>
            <Footer/>
        </Layout>
        
    )
}

export default Home
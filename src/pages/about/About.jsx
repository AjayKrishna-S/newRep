import './about.css';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chairman from '../Chairman/Chairman';
import AboutUs from '../aboutUs/AboutUs';

const About = () => {

    const Layout = () =>{
        return(
            <div style={{display:'flex'}}>
                <AboutUs /> 
                <Outlet />
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/about",
            element: <Layout />,
            children:[
                {
                    path:"/about/chairman",
                    element:<Chairman />
                }
                // {
                //     path:"/about/chairman",
                //     element:< />
                // },
                // {
                //     path:"/aboutus/chairman",
                //     element:< />
                // },
                // {
                //     path:"/aboutus/chairman",
                //     element:< />
                // },
                // {
                //     path:"/aboutus/chairman",
                //     element:< />
                // },
                // {
                //     path:"/aboutus/chairman",
                //     element:< />
                // }
            ]
        }
    ])

  return (
    <div className='about'>
        <RouterProvider router={router} />
    </div>
  )
}

export default About
import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'



const DeatilShop = lazy(() => import("./shop/DeatilShop"))
const Contact = lazy(() => import("./Contact/Contact"))
const About = lazy(() => import("./About/About"))
const Layout = lazy(()=> import("./layout/Layout"))
const Home = lazy(()=> import("./home/Home"))
const Shop = lazy(()=> import("./shop/Shop"))

const MainRouters = () => {
  return (
    <>
    {
      useRoutes([
        {path: "/", element:<Suspense><Layout/></Suspense>, children: [
          {path: "/", element:<Suspense><Home/></Suspense>},
          {path: "/shop", element:<Suspense><Shop/></Suspense> },
          {path: "/product/:id", element:<Suspense><DeatilShop/></Suspense> },
          {path: "/shop/:category", element:<Suspense><Shop/></Suspense> },
          {path: "/detail/:id", element:<Suspense><DeatilShop/></Suspense> },
          {path: "/about", element:<Suspense><About/></Suspense> },
          {path: "/contact", element:<Suspense><Contact/></Suspense> },
          {path: "*", element:<Suspense><div>NotFound...</div></Suspense> },
        ]},
      ])
    } 
    </>
  )
}

export default React.memo(MainRouters)
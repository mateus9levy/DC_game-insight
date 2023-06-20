import React from "react"
import FlyOutMenu from "./flyOutMenu"
import InversionMenu from "./inversionMenu"
import logo from "../images/logo.jpg"
const Header = () => {

    return (
        <>
            <header class="absolute inset-x-0 top-0 z-50">
                <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

                    <div class="flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <img style={{width:"150px", borderRadius:"60px"}} src={logo} alt="" />
                        </a>

                    </div>
                    <div class="mx-auto grid max-w-2xl mt-6 mr-60 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <FlyOutMenu/>
                    <InversionMenu/>
                    </div>
                    
                    <div class="flex lg:hidden">
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
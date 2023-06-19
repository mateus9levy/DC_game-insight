import React from "react"
import FlyOutMenu from "./flyOutMenu"

const Header = () => {

    return (
        <>
            <header class="absolute inset-x-0 top-0 z-50">
                <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

                    <div class="flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>

                    </div>
                    <div class="mx-auto grid max-w-2xl mt-6 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <FlyOutMenu/>
                    </div>
                    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div class="mt-8 flex max-w-md gap-x-4">
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="name" type="text" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-gray/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Adicionar " />
                            <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">pesquisar</button>
                        </div>
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
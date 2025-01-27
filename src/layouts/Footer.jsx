import React from 'react'
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <div>
      <footer className="rounded-lg mt-10 text-center shadow dark:bg-gray-800 dark:border-gray-700 border-gray-100 bottom-0 w-full text-white backdrop-blur-md">
      <div className="w-full mx-auto max-w-screen-xl p-4  md:items-center md:justify-center">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><RxGithubLogo /><a href="#" className="hover:underline"></a>
    </span>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Delectable™</a>. All Rights Reserved.
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer 

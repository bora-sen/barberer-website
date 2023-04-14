import React from "react"

function Footer() {
  return (
    <footer className="w-full h-auto p-4 bg-primary-black text-primary-white">
      <div className="w-full h-full flex flex-col md:flex-row items-center py-12 md:py-0 gap-24 md:gap-0 md:justify-between">
        <a href="/">
          <h2 className="font-mono font-bold text-4xl">barberer</h2>
        </a>
        <ul className="flex flex-col md:flex-row gap-16 md:mr-[4rem]">
          <li className="">
            <a href="/">Link 1</a>
          </li>
          <li className="">
            <a href="/">Link 2</a>
          </li>
          <li className="">
            <a href="/">Link 3</a>
          </li>
        </ul>
      </div>
      <div className="text-xs text-center">
        <span>Copyright &copy; 2023 | All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer

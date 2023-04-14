import React from "react"

function Header() {
  function switchModal(e) {
    e.preventDefault()
    document.getElementById("header_modal").classList.toggle("hidden")
  }
  return (
    <header className="w-full h-auto p-4 sticky top-0 bg-primary-white z-50">
      <div id="header_modal" className="hidden bg-red-200 absolute w-[90vw] mt-12">
        <ul className="gap-16 w-full h-auto">
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a href="/">Link 3</a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex items-center justify-between">
        <a href="/">
          <h2 className="text-primary-black font-mono font-bold text-4xl ">barberer</h2>
        </a>
        <button
          onClick={(e) => {
            switchModal(e)
          }}
          className="md:hidden"
        >
          <svg width={25} height={25} fill="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-16 mr-[4rem]">
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a className="bg-primary-black px-4 py-2 text-primary-white transition-all hover:bg-primary-green-darker font-bold" href="/booking">
              Book Service
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

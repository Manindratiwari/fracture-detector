function Sidebar() {
  return (

    <div className="w-[300px] min-h-screen bg-[#020617] border-r border-gray-800 p-8">

      {/* Logo */}
      <div className="mb-16">

        <h1 className="text-5xl font-extrabold text-blue-400">
          Fracture AI
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Smart Medical Detection
        </p>

      </div>

      {/* Menu */}
      <ul className="space-y-8">

        <li className="bg-blue-500 text-white px-6 py-4 rounded-2xl text-2xl font-semibold cursor-pointer shadow-lg">
          Dashboard
        </li>

        <li className="hover:bg-[#0f172a] hover:text-blue-400 transition duration-300 px-6 py-4 rounded-2xl text-2xl cursor-pointer">
          Upload Scan
        </li>

        <li className="hover:bg-[#0f172a] hover:text-blue-400 transition duration-300 px-6 py-4 rounded-2xl text-2xl cursor-pointer">
          Medical Reports
        </li>

        <li className="hover:bg-[#0f172a] hover:text-blue-400 transition duration-300 px-6 py-4 rounded-2xl text-2xl cursor-pointer">
          AI Analytics
        </li>

        <li className="hover:bg-[#0f172a] hover:text-blue-400 transition duration-300 px-6 py-4 rounded-2xl text-2xl cursor-pointer">
          Settings
        </li>

      </ul>

      {/* AI Card */}
      <div className="mt-20 bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-3xl shadow-2xl">

        <h2 className="text-3xl font-bold">
          AI Scanner
        </h2>

        <p className="text-blue-100 mt-4 leading-8 text-lg">

          Upload X-Ray images and generate professional AI medical reports instantly.

        </p>

        <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300">

          Start Scan

        </button>

      </div>

      {/* Bottom */}
      <div className="mt-16 text-gray-600 text-sm leading-7">

        <p>
          Version 1.0.0
        </p>

        <p>
          Apex Hospital AI System
        </p>

      </div>

    </div>

  )
}

export default Sidebar
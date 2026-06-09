function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#0f172a] border-b border-gray-800 px-8 py-5">

      <div>
        <h1 className="text-4xl font-bold text-white">
          X-Ray Fracture Detector
        </h1>

        <p className="text-gray-400 mt-1">
          AI Powered Bone Analysis System
        </p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl text-lg font-semibold">
        Profile
      </button>

    </div>
  )
}

export default Navbar
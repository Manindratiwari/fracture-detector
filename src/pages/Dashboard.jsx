import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import UploadBox from "../components/UploadBox"
import MedicalReport from "../components/MedicalReport"

function Dashboard() {
  return (
    <div className="flex bg-[#0f172a] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">
          <UploadBox />
        </div>

      </div>

    </div>
  )
}

export default Dashboard
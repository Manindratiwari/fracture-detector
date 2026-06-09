import { useState } from "react"
import axios from "axios"
import { FaCloudUploadAlt } from "react-icons/fa"
import MedicalReport from "./MedicalReport"
import BACKEND_URL from "../config"

function UploadBox() {

  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)

  const [reportData, setReportData] = useState(null)
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    address: "",
    medicalDetails: ""
  })

  // Upload Image
  const handleImage = (e) => {

    const selectedFile = e.target.files[0]

    if (selectedFile) {

      setFile(selectedFile)

      setImage(URL.createObjectURL(selectedFile))
    }
  }

  // Handle patient details change
  const handlePatientChange = (e) => {
    const { name, value } = e.target
    setPatientDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Detect Fracture
  const handleDetect = async () => {

    if (!file) {

      alert("Please upload X-Ray image")

      return
    }

    if (!patientDetails.name || !patientDetails.age) {

      alert("Please enter patient name and age")

      return
    }

    const formData = new FormData()

    formData.append("image", file)

    try {

      const response = await axios.post(
        `${BACKEND_URL}/detect`,
        formData
      )

      setReportData({ ...response.data, patientDetails })

    } catch (error) {

      console.log(error)
      console.log("Backend URL:", BACKEND_URL)

      alert("Backend connection failed. Check console for details.")
    }
  }

  return (

    <div>

      {/* Upload Section */}
      <div className="bg-[#1e293b]/90 p-10 rounded-3xl border border-gray-700 shadow-2xl">

        {/* Top */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-5xl font-bold">
              Upload X-Ray
            </h2>

            <p className="text-gray-400 mt-3 text-xl">
              PNG, JPG Supported
            </p>

          </div>

          <div className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-xl text-lg">
            AI Powered
          </div>

        </div>

        {/* Upload Box */}
        <label className="border-2 border-dashed border-blue-500 rounded-3xl p-24 flex flex-col items-center justify-center cursor-pointer hover:bg-[#334155] transition">

          <FaCloudUploadAlt className="text-8xl text-blue-400 mb-6" />

          <p className="text-4xl font-semibold text-gray-300">
            Click To Upload X-Ray
          </p>

          <input
            type="file"
            className="hidden"
            onChange={handleImage}
          />

        </label>

        {/* Preview */}
        {
          image && (

            <div className="mt-10">

              <h3 className="text-3xl font-semibold mb-5">
                Preview
              </h3>

              <img
                src={image}
                alt="preview"
                className="w-96 rounded-2xl shadow-xl border border-gray-700"
              />

            </div>
          )
        }

        {/* Detect Button */}
        <button
          onClick={handleDetect}
          className="mt-10 bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-2xl text-2xl font-semibold transition hover:scale-105"
        >
          Detect Fracture
        </button>

        {/* Patient Details Form */}
        <div className="mt-8 p-6 bg-[#1e293b] rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Patient Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-300">Patient Name</label>
              <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handlePatientChange}
                placeholder="Enter patient name"
                className="w-full border rounded px-3 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Age</label>
              <input
                type="number"
                name="age"
                value={patientDetails.age}
                onChange={handlePatientChange}
                placeholder="Enter age"
                className="w-full border rounded px-3 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-300">Address</label>
              <input
                type="text"
                name="address"
                value={patientDetails.address}
                onChange={handlePatientChange}
                placeholder="Enter address"
                className="w-full border rounded px-3 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-300">Medical Details</label>
              <textarea
                name="medicalDetails"
                value={patientDetails.medicalDetails}
                onChange={handlePatientChange}
                placeholder="Enter medical details"
                rows="3"
                className="w-full border rounded px-3 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Report */}
      {
        reportData && (

          <div className="mt-12">

            <MedicalReport
              data={reportData}
              image={image}
            />

          </div>
        )
      }

    </div>
  )
}

export default UploadBox

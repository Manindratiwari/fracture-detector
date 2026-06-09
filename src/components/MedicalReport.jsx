import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function MedicalReport({ image, data }) {

  // Extract patient details from data prop
  const patientDetails = data?.patientDetails || {
    name: "Unknown",
    age: "N/A",
    address: "N/A",
    medicalDetails: "N/A"
  }

  // Download PDF
  const downloadReport = () => {

    const input = document.getElementById("medical-report")

    html2canvas(input, {
      scale: 2
    }).then((canvas) => {

      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF("p", "mm", "a4")

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)

      pdf.save("Medical_Report.pdf")

    })

  }

  return (

    <div className="mt-16">

      {/* Download Button */}
      <div className="flex justify-end mb-6">

        <button
          onClick={downloadReport}
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-xl font-bold shadow-xl transition duration-300"
        >

          Download Report

        </button>

      </div>

      {/* Medical Report */}
      <div
        id="medical-report"
        className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl"
      >

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-10 py-8 flex justify-between items-center">

          {/* Left */}
          <div className="flex items-center gap-5">

            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-blue-700 text-3xl font-bold">

              A

            </div>

            <div>

              <h1 className="text-5xl font-extrabold">
                APEX HOSPITAL
              </h1>

              <p className="text-blue-100 mt-2 text-lg">
                AT - GOPALGANJ
              </p>

            </div>

          </div>

          {/* Right */}
          <div className="text-right leading-9">

            <p>+91 91234 56789</p>
            <p>info@apexhospital.in</p>
            <p>Gopalganj, Bihar</p>

          </div>

        </div>

        {/* Report Title */}
        <div className="text-center py-10 border-b">

          <h1 className="text-6xl font-extrabold text-blue-900">
            MEDICAL REPORT
          </h1>

          <p className="text-gray-500 mt-4 text-xl">
            AI Powered Fracture Detection
          </p>

        </div>

        {/* Doctor + Date */}
        <div className="grid grid-cols-2 gap-8 p-10">

          <div className="border rounded-2xl p-6">

            <p className="text-gray-500 text-lg">
              Doctor Name
            </p>

            <h2 className="text-4xl font-bold mt-4">
              Dr. M. Tripathi
            </h2>

            <p className="text-gray-600 mt-3">
              MBBS, MS (Orthopedics)
            </p>

          </div>

          <div className="border rounded-2xl p-6">

            <p className="text-gray-500 text-lg">
              Report Date
            </p>

            <h2 className="text-4xl font-bold mt-4">
              26 May 2026
            </h2>

            <p className="text-gray-600 mt-3">
              Report ID: AHXR26052601
            </p>

          </div>

        </div>

        {/* Patient Information */}
        <div className="px-10 pb-10">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Patient Information
          </h2>

          <div className="grid grid-cols-2 gap-8">

            <div className="border rounded-2xl p-6">

              <p className="text-gray-500">
                Patient Name
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {patientDetails.name}
              </h3>

            </div>

            <div className="border rounded-2xl p-6">

              <p className="text-gray-500">
                Age / Gender
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {patientDetails.age} Years / Male
              </h3>

            </div>

            <div className="border rounded-2xl p-6">

              <p className="text-gray-500">
                Address
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {patientDetails.address}
              </h3>

            </div>

            <div className="border rounded-2xl p-6">

              <p className="text-gray-500">
                Medical Details
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {patientDetails.medicalDetails}
              </h3>

            </div>

            <div className="border rounded-2xl p-6">

              <p className="text-gray-500">
                Confidence
              </p>

              <h3 className="text-3xl font-bold text-green-600 mt-3">
                96%
              </h3>

            </div>

          </div>

        </div>

        {/* X-Ray + Result */}
        <div className="grid grid-cols-2 gap-8 px-10 pb-10">

          {/* Image */}
          <div>

            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              X-Ray Image
            </h2>

            <img
              src={image}
              alt="xray"
              className="rounded-3xl w-full h-[350px] object-cover border"
            />

          </div>

          {/* AI Result */}
          <div>

            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              AI Analysis Summary
            </h2>

            <div className="border rounded-3xl p-8 space-y-8">

              <div className="flex justify-between">

                <span className="text-xl">
                  Fracture Status
                </span>

                <span className="text-red-500 font-bold text-xl">
                  Fracture Detected
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-xl">
                  Fracture Type
                </span>

                <span className="font-semibold text-xl">
                  Hairline Fracture
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-xl">
                  Severity
                </span>

                <span className="text-yellow-600 font-bold text-xl">
                  Moderate
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-xl">
                  Confidence
                </span>

                <span className="text-green-600 font-bold text-xl">
                  96%
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Clinical Findings */}
        <div className="px-10 pb-10">

          <div className="border rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Clinical Findings
            </h2>

            <ul className="space-y-5 text-lg leading-9">

              <li>
                • Irregular line observed in radius bone.
              </li>

              <li>
                • Possible hairline fracture detected.
              </li>

              <li>
                • No major displacement observed.
              </li>

              <li>
                • Further orthopedic consultation recommended.
              </li>

            </ul>

          </div>

        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-10 py-8 flex justify-between items-center border-t">

          <div>

            <h2 className="text-2xl font-bold">
              Dr. M. Tripathi
            </h2>

            <p className="text-gray-600 mt-2">
              MBBS, MS (Orthopedics)
            </p>

          </div>

          <div className="text-right">

            <p className="text-gray-500 mb-2">
              Authorized Signature
            </p>

            <h2 className="text-5xl">
              ✍️
            </h2>

          </div>

        </div>

      </div>

    </div>

  )
}

export default MedicalReport
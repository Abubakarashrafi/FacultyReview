"use client"

import { useState, useEffect } from "react"

const AdminPanel = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Dr. Jane Smith",
      department: "Computer Science",
      expertise: "Machine Learning",
      status: "Approved",
      isExpanded: false,
      submittedBy: "John Doe",
    },
    {
      id: 2,
      name: "Prof. John Doe",
      department: "Physics",
      expertise: "Quantum Mechanics",
      status: "Pending",
      isExpanded: false,
      submittedBy: "Jane Smith",
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      department: "Mathematics",
      expertise: "Number Theory",
      status: "Pending",
      isExpanded: false,
      submittedBy: "Michael Johnson",
    },
    {
      id: 4,
      name: "Prof. Michael Lee",
      department: "Chemistry",
      expertise: "Organic Chemistry",
      status: "Pending",
      isExpanded: false,
      submittedBy: "Sarah Williams",
    },
  ])

  const [toast, setToast] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState("")
  const [editDepartment, setEditDepartment] = useState("")

  const handleApprove = (id) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "Approved" } : req)))
    showToast("Teacher approved successfully!", "success")
  }

  const handleReject = (id) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "Rejected" } : req)))
    showToast("Teacher rejected", "error")
  }

  const toggleExpand = (id) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, isExpanded: !req.isExpanded } : req)))
  }

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const startEditing = (teacher) => {
    setEditingId(teacher.id)
    setEditName(teacher.name)
    setEditDepartment(teacher.department)
  }

  const saveEdit = () => {
    setRequests(
      requests.map((req) => (req.id === editingId ? { ...req, name: editName, department: editDepartment } : req)),
    )
    setEditingId(null)
    showToast("Teacher information updated", "success")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editingId && !event.target.closest(".edit-form")) {
        setEditingId(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [editingId])

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-4 sm:p-8 shadow-2xl ">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-500 mt-1 mb-6">Manage teacher addition requests</p>

        <div className="space-y-4">
          {requests.map((teacher) => (
            <div key={teacher.id} className="border rounded-xl bg-white shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    {editingId === teacher.id ? (
                      <div className="edit-form space-y-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border rounded px-2 py-1 w-full sm:w-auto"
                        />
                        <input
                          type="text"
                          value={editDepartment}
                          onChange={(e) => setEditDepartment(e.target.value)}
                          className="border rounded px-2 py-1 w-full sm:w-auto"
                        />
                        <button
                          onClick={saveEdit}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                        <p className="text-gray-500">{teacher.department}</p>
                        <p className="text-sm text-gray-400">Submitted by: {teacher.submittedBy}</p>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => handleApprove(teacher.id)}
                      className={`p-1.5 rounded-md ${
                        teacher.status === "Approved"
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-green-600 hover:bg-green-50"
                      }`}
                      disabled={teacher.status === "Approved"}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleReject(teacher.id)}
                      className={`p-1.5 rounded-md ${
                        teacher.status === "Rejected"
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-red-600 hover:bg-red-50"
                      }`}
                      disabled={teacher.status === "Rejected"}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        teacher.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : teacher.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {teacher.status}
                    </span>
                    <button
                      onClick={() => startEditing(teacher)}
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => toggleExpand(teacher.id)}
                      className="p-1.5 text-gray-400 hover:bg-gray-50 rounded-md"
                    >
                      <svg
                        className={`w-5 h-5 transform transition-transform ${teacher.isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                {teacher.isExpanded && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-700">
                      <span className="font-medium">Expertise:</span> {teacher.expertise}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {toast && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  )
}

export default AdminPanel


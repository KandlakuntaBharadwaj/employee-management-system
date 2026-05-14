function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-4xl w-full text-center">
        
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          Employee Management System
        </h1>

        <p className="text-gray-600 text-lg leading-8 mb-8">
          This application is developed to manage employee details efficiently.
          Users can create employees, view employee records, edit employee
          information, and perform complete CRUD operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              Add Employee
            </h2>
            <p className="text-gray-600">
              Create and store employee details using backend APIs.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              View Employees
            </h2>
            <p className="text-gray-600">
              Display all employee records from MongoDB database.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-3">
              Edit Details
            </h2>
            <p className="text-gray-600">
              Update employee information using React and Express APIs.
            </p>
          </div>

        </div>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-300">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Home
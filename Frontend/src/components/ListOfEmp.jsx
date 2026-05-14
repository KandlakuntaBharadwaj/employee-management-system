import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployees = (empObj) => {
    navigate("/emps", { state: empObj });
  };

  const gotoEditEmployees = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  const deleteEmployee = async (id) => {
    try {
      setLoading(true);
      let res = await fetch(`http://localhost:4000/api/emp/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        getEmps();
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmps();
  }, []);

  async function getEmps() {
    try {
      setLoading(true);
      let res = await fetch("http://localhost:4000/api/emp");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-gray-200 shadow-2xl border-gray-950 p-5 text-center text-2xl rounded-2xl"
          >
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            <div className="flex justify-around">
              <button
                onClick={() => gotoEmployees(empObj)}
                className="bg-green-300 p-2 rounded-2xl text-white"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployees(empObj)}
                className="bg-yellow-300 p-2 rounded-2xl text-white"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmployee(empObj._id)}
                className="bg-red-300 p-2 rounded-2xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
import { NavLink } from "react-router"

function Header() {
  return (
     <nav className='p-5 bg-blue-200'>
    <ul className='flex justify-end gap-5'>
      <li>
        <NavLink to="" className={({ isActive }) => (isActive ? "text-pink-500 bg-pink-200 p-3" : "")}>Home</NavLink>
      </li>
      <li>
        <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-pink-500 bg-pink-200 p-3" : "")}>CreateEmp</NavLink>
      </li>
      <li>
        <NavLink to="list" className={({ isActive }) => (isActive ? "text-pink-500 bg-pink-200 p-3" : "")}>ListOfEmp</NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default Header


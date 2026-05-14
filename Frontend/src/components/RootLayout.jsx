import Header from './Header'
import{Outlet} from 'react-router'

function Rootlayout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Rootlayout
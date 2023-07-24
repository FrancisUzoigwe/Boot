import FirstHeader from './FirstHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default FirstLayout

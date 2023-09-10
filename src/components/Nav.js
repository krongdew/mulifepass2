import {Link} from 'react-router-dom'
import React from 'react'


const Nav = () => {
  return (
    <nav>
        {/* หลัง / คือพาร์ทไฟล์บน URL */}
        <Link to='/'>MU Life pass</Link>
        <Link to='/Event'>Event</Link>
        <Link to='/FAQ'>FAQ</Link>
    </nav>
  )
}

export default Nav
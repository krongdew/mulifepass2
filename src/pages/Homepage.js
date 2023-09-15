import React from 'react'
// ..สองจุดคือถอยออกจากตัวเองและเข้าโฟลเดอร์
import Navbars from '../components/Navbars'
import Bgcars from '../components/Bgcars'
import Checkingradient from '../components/Checkingradient'
import Datatest from '../components/Datatest'


const homepage = () => {
  return (
    <>
    <Navbars />
    <Bgcars />
    <Checkingradient />
    <Datatest/>
    </>
  )
}

export default homepage
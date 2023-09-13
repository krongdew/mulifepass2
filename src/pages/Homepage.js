import React from 'react'
// ..สองจุดคือถอยออกจากตัวเองและเข้าโฟลเดอร์
import Navbars from '../components/Navbars'
import ImageSlider from '../components/Slider'
import Bgcars from '../components/Bgcars'
import Checkingradient from '../components/Checkingradient'


const homepage = () => {
  return (
    <>
    <Navbars />
    <Bgcars />
    <Checkingradient />
    </>
  )
}

export default homepage
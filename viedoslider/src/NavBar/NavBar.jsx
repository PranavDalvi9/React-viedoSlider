import React from 'react'
import "./NavBar.css"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <div className='NavBar'>
      <div onClick={() => navigate("/")}>
        Home
      </div>

      <div onClick={() => navigate("/onboarding")}>
        Onboarding
      </div>

    </div>
  )
}

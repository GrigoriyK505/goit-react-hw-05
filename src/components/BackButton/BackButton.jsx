import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function BackButton() {
    const location = useLocation();
    const navigate = useNavigate();
  return (
      <div>
          <button onClick={() => navigate(location.state ?.prevLocation || "/")}>Go back</button>
    </div>
  )
}

export default BackButton
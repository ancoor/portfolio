import React from 'react'
import Loader from './Loader'
const FullPageLoader = () => {
  return (
    <div className="fp-container" style={{ zIndex: "1000" }}>
        <Loader />
    </div>
  )
}

export default FullPageLoader
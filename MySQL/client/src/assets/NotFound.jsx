import React from 'react'

const NotFound = () => {
  const goToBackPage = ()=>{
      window.history.back();
  }
  return (
    <>
         <div className="cardStyle">
                <div class="card">
                    <div class="card-body ">
                        <h1 className='card-title text-center fw-bold'>Page Not Found !!!</h1>
                    </div>
                    <button className="btn btn-primary w-50 mx-auto mb-2" onClick={goToBackPage}>Back</button>
                </div>
            </div>
    </>
  )
}

export default NotFound
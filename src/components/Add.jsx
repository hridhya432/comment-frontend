import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
        <Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-4">
            
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Post Id</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Id</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Email</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Body</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <button className="btn btn-success">Submit</button>
            </div>
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Add
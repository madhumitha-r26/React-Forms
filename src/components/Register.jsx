import React, { Component } from 'react'

export class Register extends Component {
  render() {
    return (
      <div className='mt-28'>
      <div>
        <h1 className='text-center font-semibold text-4xl mb-4'>REGISTER</h1>
      </div>
      <div className='flex justify-center items-center'>       
        <div className="artboard phone-1 space-y-4">
        <input type="text" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
        <input type="password" placeholder="Enter New Password" className="input input-bordered w-full max-w-xs" />
        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-accent w-full">Register</button>
        </div>
      </div>
      </div>
    )
  }
}

export default Register
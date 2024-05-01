import React from 'react'

const Contact = () => {
  return (
      <>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <form className="m-4">
            <input 
              type="text" 
              className="border p-2 m-2"
              placeholder="name"
            />
            <input 
              type="text" 
              className="border p-2 m-2"
              placeholder="message"
            />
            <button className="border border-black py-2 px-4 m-2 bg-stone-200 rounded-md">submit</button>

        </form>            
      </>
  )
}

export default Contact;

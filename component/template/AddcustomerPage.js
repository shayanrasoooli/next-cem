import React, {  useState } from 'react'
import Form from '../module/Form'
import { useRouter } from 'next/router'
// import "../../styles/globals.css"

function AddcustomerPage() {

  const router = useRouter();
  const [form , setForm] = useState({
    name : "" , 
    lastName : "" , 
    email : "" , 
    phone : "" , 
    address : "" , 
    postalCode : "" ,
    data : "" , 
    products : []
  })


  const cancelHandler= () => {
      setForm({
        name : "" , 
        lastName : "" , 
        email : "" , 
        phone : "" , 
        address : "" , 
        postalCode : "" ,
        data : "" , 
        products : []
      })
      router.push("/")
  }

  const saveHandler = async () => {
    const res = await fetch("/api/customer" , {
      method : "POST" , 
      body : JSON.stringify({ data: form }) , 
      headers : {"Content-Type" : "application/json"}
    });
    const data = await res.json();
    console.log(data);
    if(data.status === "success") router.push('/')
  }
  return (
    <div className='customer-page'>
      <h4>add customer</h4>
      <Form form={form} setForm={setForm} />
      <div className='customer-page__buttons'>
        <button className='first' onClick={cancelHandler}>Cancel</button>
        <button className='second' onClick={saveHandler}>Save</button>
      </div>

        
    </div>
  )
}

export default AddcustomerPage
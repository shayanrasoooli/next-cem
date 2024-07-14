import React, { useState } from 'react'
import Form from "../module/Form"
import { useRouter } from 'next/router'
import moment from 'moment';

function CustomerEditPage({data , id}) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : '';
  const router = useRouter();
  const [form , setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date|| "",
  })

  const saveHandler = async () => {
      const res = await fetch(`http://localhost:3000/api/edit/${id}`  ,{
        method : "PATCH" , 
        body : JSON.stringify({ data : form }),
        Headers : {"Content-Type" : "application/json"}
      });
      const data = await  res.json();
      if (data.status === "success") {
        router.push("/")
      }
}
  const cancelHandler = () => {
      router.push("/")
  }
  return (
     <div className='customer-page'>
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <button className='customer-page__buttons'>
        <button className='first' onClick={cancelHandler}>cancel</button>
        <button className='second' onClick={saveHandler}>save</button>
      </button>
     </div>
  )
}

export default CustomerEditPage
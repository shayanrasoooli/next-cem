import FormInput from "./FormInput"
import ItemList from "./itemList"
function Form({form , setForm}) {
    const changeHandler = (e) => {
        const {name , value} = e.target;
        setForm({...form , [name] :  value })
    } 
  return (
    <div>
        <FormInput name='name' label='Name' type='text' value={form.name} onChange={changeHandler} />
        <FormInput name='lastName' label='lastName' type='text' value={form.lastName} onChange={changeHandler} />
        <FormInput name='email' label='email' type='text' value={form.email} onChange={changeHandler} />
        <FormInput name='phone' label='phone' type='text' value={form.phone} onChange={changeHandler} />
        <FormInput name='address' label='address' type='text' value={form.address} onChange={changeHandler} />
        <FormInput name='postalCode' label='postalCode' type='text' value={form.postalCode} onChange={changeHandler} />
        <FormInput name='date' label='date' type='date' value={form.date} onChange={changeHandler} />
        <ItemList form={form} setForm={setForm} /> 
    </div>
  )
}

export default Form
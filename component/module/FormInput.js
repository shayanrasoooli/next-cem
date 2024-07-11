function FormInput({name , label , type , value , onChange }) {
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} value={value} onChange={onchange} /> 
    </div>
  )
}

export default FormInput
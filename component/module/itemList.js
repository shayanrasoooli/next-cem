import FormInput from "./FormInput";

function itemList({form , setForm}) {
    const {products} = form;

    const addHandler = () => {
        setForm({
            ...form , 
            products : [...products , {name : "" , price : "" , qty : ""}],
        })
        console.log(products);
    }

    const changeHandler = (e , index) => {
        const {name , value} = e.target;
        const newProduct = [...products];
        newProduct[index][name] = value;
        setForm({ ...form , products : newProduct });
    }
    const deleteHandler = (index) => {
        const newProducts = [...products];
        newProducts.splice(index , 1);
        setForm({...form , products : newProducts})
    }

  return (
    <div className="item-list">
        <p>Purchased products</p>
        {products.map((product , index) => (
            <div key={index} className="form-input__list">
                <FormInput name='name' label="product name" type='text' value={product.name} onChange={(e) => changeHandler(e, index)} /> 
                <div>
                <FormInput name='price' label="price" type='text' value={product.price} onChange={(e) => changeHandler(e, index)} /> 
                <FormInput name='qty' label="qty" type='number' value={product.qty} onChange={(e) => changeHandler(e, index)} /> 
                </div>
                <button onClick={() => deleteHandler(index)}>Remove</button>
            </div>
        ))}
            <button  onClick={addHandler}>Add Item</button>

    </div>
  )
}

export default itemList
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
            <ProductItem key={index} product={product} changeHandler={(e) => changeHandler(e, index)} deleteHandler={() => deleteHandler(index)} />
))}
            <button  onClick={addHandler}>Add Item</button>

    </div>
  )
}

export default itemList


function ProductItem({product , changeHandler , deleteHandler}) {
    return(
        <div className="form-input__list">
        <FormInput name='name' label="product name" type='text' value={product.name} onChange={changeHandler} /> 
        <div>
        <FormInput name='price' label="price" type='text' value={product.price} onChange={changeHandler} /> 
        <FormInput name='qty' label="qty" type='number' value={product.qty} onChange={changeHandler} /> 
        </div>
        <button onClick={deleteHandler}>Remove</button>
    </div>

    )
}
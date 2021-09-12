import React,{useState} from 'react';
import {Form,Input} from 'reactstrap';

const AddMedicine = (e) => {
    const[inputVal , setInputval] = useState([
        {name:'',price:'', quantity:'',expiry:''}
    ])

    const handelInputVal= (e,index) =>{
        const values = [...inputVal]

        if(e.target.name === 'name'){
            values[index].name = e.target.value
        }else if(e.target.name === 'price'){
            values[index].price = e.target.value
        }else if(e.target.name === 'quantity'){
            values[index].quantity = e.target.value
        }else if(e.target.name === 'expiry'){
            values[index].expiry = e.target.value
        }
        setInputval(values)
    }

    const addFeild = (index) =>{
        const values = [...inputVal]
        values.splice(index + 1 , 0, {name:'',price:'', quantity:'',expiry:''});
        setInputval(values)
    }
    
    const removeFeild = (index) =>{
        const values = [...inputVal]
        values.splice(index,1)
        setInputval(values)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="section-title pb-0">
                            <h2>Add Medicine</h2>
                        </div>
                        <Form method="post" onSubmit={(e) => handleSubmit(e)}>
                        {
                            inputVal.map((val, index) =>{
                                return(
                                    <div className="row mb-2" key={index}>
                                        <div className="col-2">
                                            <Input type='text' name='name' placeholder='Name' value={val.name} onChange={(e) => handelInputVal(e,index)}/>
                                        </div>
                                        <div className="col-2">
                                            <Input type='text' name='price' placeholder='Price' value={val.price} onChange={(e) => handelInputVal(e,index)}/>
                                        </div>
                                        <div className="col-2">
                                            <Input type='text' name='quantity' placeholder='Quantity' value={val.quantity} onChange={(e) => handelInputVal(e,index)}/>
                                        </div>
                                        <div className="col-2">
                                            <Input type='text' name='expiry' placeholder='Expiry' value={val.expiry} onChange={(e) => handelInputVal(e,index)}/>
                                        </div>
                                        <div className="col-2">
                                            <button className='btn btn-primary'style={{marginRight:'8px'}} onClick={(e) => addFeild(index)}>+</button>
                                            <button className='btn btn-danger' onClick={(e) => removeFeild(index)}>-</button>
                                        </div>
                                    </div>
                                )
                            })
                        }                            
                        </Form>                           
                    </div>
                </section>
            </main>
        </>
    );
}

export default AddMedicine;
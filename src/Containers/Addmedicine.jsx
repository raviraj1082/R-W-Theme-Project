import React,{useState} from 'react';
import {Form,Input,Button} from 'reactstrap';

const AddMedicine = (props) => {
    const[inputVal , setInputval] = useState([
        {name:'',price:'', quantity:'',expiry:'',desc:''}
    ])
    const[updateData,setUpdateData] = useState({})
    const handleSubmit = (e) =>{
        e.preventDefault()
       
        let localData = JSON.parse(localStorage.getItem("medicineData"))
        const values = [...inputVal]
        
        let i = localData[localData.length - 1].id + 1
        
        let data = values.map((v) => ({...v, "id" : i++}))
        // data.map((d) => {
        //     data == null ?  alert("Please fill data...") : localData.push(d)                     
        // }       
        data.map((d) => localData.push(d))
        
        //localStorage.removeItem('medicineData')
        localStorage.setItem('medicineData',JSON.stringify(localData))

        alert("Medicine added successfully.")
        props.loadRef()
        setInputval([{name:'',price:'', quantity:'',expiry:'',desc:''}])
    
    }
    
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
        }else if(e.target.name === 'desc'){
            values[index].desc = e.target.value
        }
        setInputval(values)       
    }
    const addFieldUp = (index) =>{
        const values = [...inputVal]
        values.splice(index , 0, {name:'',price:'', quantity:'',expiry:'',desc:''});
        setInputval(values)
    }
    const addFieldDown = (index) =>{
        const values = [...inputVal]
        values.splice(index + 1 , 0, {name:'',price:'', quantity:'',expiry:'',desc:''});
        setInputval(values)
    }        
    const removeFeild = (index) =>{
        const values = [...inputVal]
        values.splice(index,1)
        setInputval(values)
    }
    return (
        <>
            <Form method="post" onSubmit={(e) => handleSubmit(e)}>
            {
                inputVal.map((val, index) =>{
                    return(
                        <div className="row my-2" key={index}>
                            <div className="col-2">
                                <Input type='text' name='name' placeholder='Name' value={val.name} onChange={(e) => handelInputVal(e,index)}/>
                            </div>
                            <div className="col-2">
                                <Input type='number' name='price' placeholder='Price' value={val.price} onChange={(e) => handelInputVal(e,index)}/>
                            </div>
                            <div className="col-2">
                                <Input type='number' name='quantity' placeholder='Quantity' value={val.quantity} onChange={(e) => handelInputVal(e,index)}/>
                            </div>
                            <div className="col-2">
                                <Input type="select" name='expiry' placeholder='Expiry' value={val.expiry} onChange={(e) => handelInputVal(e,index)} style={{backgroundColor:'transparent'}}>
                                    <option>Expiry</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                </Input>                               
                            </div>           
                            <div className="col-2">
                                <Input type="text" name="desc"  placeholder="Desc" value={val.desc} onChange={(e) => handelInputVal(e,index)}/>
                            </div>                             
                            <div className="col-2">
                                <Button color='primary' style={{marginRight:'8px'}} onClick={() => addFieldUp(index)}>+ &#8593;</Button>
                                <Button color='primary' style={{marginRight:'8px'}} onClick={() => addFieldDown(index)}>+ &#8595;</Button>
                                {
                                    inputVal.length !== 1 ? 
                                        <Button color='danger' onClick={() => removeFeild(index)}>-</Button>
                                    :
                                        null                                    
                                }                                
                            </div>                                       
                        </div>
                    )
                })
                
            }    
            <div className="col-12 text-center">
                <button type="submit" className='bg-primary btn btn-secondary my-3'>Add Medicine</button>                              
            </div>                                                
            </Form> 
        </>
    );
}

export default AddMedicine;
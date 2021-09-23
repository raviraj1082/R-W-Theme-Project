import React, { useState } from 'react';
import List from './List';
import {Input } from 'reactstrap';
import Addmedicine from './Addmedicine';

const data =[
    {   id:1,
        name:'Ativan',
        price:280.00,
        quantity:10,
        expiry:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {   id:2,
        name:'Entresto',
        price:1080.00,
        quantity:10,
        expiry:'08-02-2021',
        desc:'liver disease/diabetes'
    },
    {   
        id:3,
        name:'Ozempic',
        price:987.00,
        quantity:10,
        expiry:'31-01-2023',
        desc:'low blood sugar'
    },
    {   
        id:4,
        name:'Methotrexate',
        price:364.00,
        quantity:10,
        expiry:'22-11-2022',
        desc:'low blood cell counts'
    },
    {   
        id:5,
        name:'Probuphine',
        price:1245.00,
        quantity:10,
        expiry:'16-06-2021',
        desc:'mental illness or psychosis'
    },
    {   
        id:6,
        name:'Cymbalta',
        price:110.00,
        quantity:10,
        expiry:'14-03-2018',
        desc:'slow digestion'
    },
    {   
        id:7,
        name:'Ativan',
        price:280.00,
        quantity:10,
        expiry:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {   
        id:8,
        name:'Methotrexate',
        price:364.00,
        quantity:10,
        expiry:'22-11-2022',
        desc:'low blood cell counts'
    }
]

const Medicines = (props) => {    
    const[search,setSearch] = useState('')
    const[addMedList,setAddMedList] = useState(false)
    const[,setUpdateData] = useState({})
    
    const loadRefFun = () =>{
        setUpdateData({})
    }

    const localData = localStorage.getItem("medicineData")
    let localMData;

    if(localData == null){
        localStorage.setItem("medicineData",JSON.stringify(data))
        localMData = data
    }else{
        localMData = JSON.parse(localData)
    }

    //DELETE-MED-DATA
    const deleteMed = (id) =>{  
        let delData = localMData.filter((d) => d.id !== id)
        alert("Medicine delete successfully.")
        localStorage.removeItem('medicineData')
        localStorage.setItem("medicineData",JSON.stringify(delData))
        setUpdateData({})
    }    
    
    //EDIT-MED-DATA
    const editFun = (id) =>{
        let delData = localMData.filter((d) => d.id === id)        
        console.log(delData)        
    }
    
    //FILTER-ALL-DATA
    let filterData = localMData.filter((val) => (val.name.toLowerCase().includes(search.toLowerCase().substr()) || (val.price.toString().includes(search)) ||  (val.quantity.toString().includes(search)) || (val.expiry.toString().includes(search)) || val.desc.toLowerCase().includes(search.toLowerCase().substr())))    
    if(search === ''){
        filterData = localMData
    }  

    return (
        <>  
            <main>
                <section>
                    <div className="container position-relative">
                        <div className="section-title pb-0">
                            <h2>Medicine List</h2>
                        </div>                      
                        <div className="row">
                            {
                                addMedList !== false ? <Addmedicine loadRef={() => loadRefFun()} /> : null
                            }                           
                            <div className="col-12 text-center">
                                {
                                    addMedList !== false ?
                                        <button type="submit" className='bg-primary btn btn-sm btn-secondary' style={{minInlineSize:'115px', position: 'absolute', top: '0', right: '0' }} onClick={(e) => setAddMedList(false)}> - Remove List</button>
                                        :
                                        <button type="submit" className='bg-primary btn btn-sm btn-secondary' style={{minInlineSize:'115px', position: 'absolute', top: '0', right: '0' }} onClick={(e) => setAddMedList(true)}> + Add Medicine</button>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mx-auto pt-3">                                
                                <Input type="text" placeholder='Filter as your requirement...(name/price/quantity/expiry/desc)' onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">                            
                            {
                                filterData.map((val,index) =>(
                                    <List key={index}  name={val.name} price={val.price} quantity={val.quantity} expiry={val.expiry} desc={val.desc} editBtn={() => editFun(val.id)} deleteBtn={() => deleteMed(val.id)} btnId={val.id}/>                                   
                                ))
                            }                                                      
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Medicines;

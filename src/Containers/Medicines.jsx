import React, { useState } from 'react';
import List from './List';
import {Input } from 'reactstrap';
import Addmedicine from './Addmedicine';

const medicineData =[
    {   id:1,
        name:'Ativan',
        price:280.00,
        date:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {   id:2,
        name:'Entresto',
        price:1080.00,
        date:'08-02-2021',
        desc:'liver disease/diabetes'
    },
    {   
        id:3,
        name:'Ozempic',
        price:987.00,
        date:'31-01-2023',
        desc:'low blood sugar'
    },
    {   
        id:4,
        name:'Methotrexate',
        price:364.00,
        date:'22-11-2022',
        desc:'low blood cell counts'
    },
    {   
        id:5,
        name:'Probuphine ',
        price:1245.00,
        date:'16-06-2021',
        desc:'mental illness or psychosis'
    },
    {   
        id:6,
        name:'Cymbalta',
        price:110.00,
        date:'14-03-2018',
        desc:'slow digestion'
    },
    {   
        id:7,
        name:'Ativan',
        price:280.00,
        date:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {   
        id:8,
        name:'Methotrexate',
        price:364.00,
        date:'22-11-2022',
        desc:'low blood cell counts'
    }
]

const Medicines = (props) => {    
    const[search,setSearch] = useState('')
    const[addMedList,setAddMedList] = useState(false)
   
    const localData = localStorage.getItem("medicineData")
    let localNewData;

    if(localData == null){
        localStorage.setItem("MTable",JSON.stringify(medicineData))
        localNewData = medicineData
    }else{
        localNewData = JSON.parse(medicineData)
    }
    //Filter-DATA
    let filterData = localNewData.filter((val) => (val.name.toLowerCase().includes(search.toLowerCase().substr()) || (val.price.toString().includes(search)) || val.desc.toLowerCase().includes(search.toLowerCase().substr())))    
    if(search === ''){
        filterData = localNewData
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
                                addMedList !== false ? <Addmedicine /> : null
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
                                <Input type="text" placeholder='Filter as your requirement...(name/price/quantity/date/desc)' onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">                            
                            {
                                filterData.map((val,index) =><List key={index+1} id={index + 1}  name={val.name} price={val.price} date={val.date} desc={val.desc}/>)
                            }                           
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Medicines;

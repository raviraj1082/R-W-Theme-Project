import React, { useState } from 'react';
import List from './List';
import { Button,Input } from 'reactstrap';

const medicineList =[
    {       
        name:'Ativan',
        price:280.00,
        date:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {
        name:'Entresto',
        price:1080.00,
        date:'08-02-2021',
        desc:'liver disease/diabetes'
    },
    {
        name:'Ozempic',
        price:987.00,
        date:'31-01-2023',
        desc:'low blood sugar'
    },
    {
        name:'Methotrexate',
        price:364.00,
        date:'22-11-2022',
        desc:'low blood cell counts'
    },
    {
        name:'Probuphine ',
        price:1245.00,
        date:'16-06-2021',
        desc:'mental illness or psychosis'
    },
    {
        name:'Cymbalta',
        price:110.00,
        date:'14-03-2018',
        desc:'slow digestion'
    },
    {
        name:'Ativan',
        price:280.00,
        date:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {
        name:'Methotrexate',
        price:364.00,
        date:'22-11-2022',
        desc:'low blood cell counts'
    }
]

const Medicines = (props) => {

    const[medicine] = useState(medicineList)
    const[search,setSearch] = useState('')

    let filterData = medicine.filter((val) => (val.name.toLowerCase().includes(search.toLowerCase().substr()) || (val.price.toString().includes(search)) || (val.desc.toLowerCase().includes(search.toLowerCase()))))
    
    if(search === ''){
        filterData = medicine
    }

    return (
        <>  
            <main>
                <section>
                    <div className="container">
                        <div className="section-title pb-0">
                            <h2>Medicine List</h2>
                        </div>
                        {/* <div className="row">
                            <div className="col-3">
                                <Input type="text" name="name"  placeholder="Name" />
                            </div>
                            <div className="col-3">
                                <Input type="text" name="name"  placeholder="Price"/>
                            </div>
                            <div className="col-3">
                                <Input type="text" name="name"  placeholder="Date"/>
                            </div>
                            <div className="col-3">
                                <Button className='bg-primary'>Add Medicine</Button>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-4 mx-auto pt-3">
                                <Input type="text" placeholder='Filter as your requirement...' onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">                            
                            {
                                filterData.map((val,index) => <List key={index+1}  name={val.name} price={val.price} date={val.date} desc={val.desc}/>)
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Medicines;

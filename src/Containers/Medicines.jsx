import React, { useState } from 'react';
import List from './List';

const medicineList =[
    {       
        name:'Ativan',
        date:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {
        name:'Entresto',
        date:'08-02-2021',
        desc:'liver disease/diabetes'
    },
    {
        name:'Ozempic',
        date:'31-01-2023',
        desc:'low blood sugar'
    },
    {
        name:'Methotrexate',
        date:'22-11-2022',
        desc:'low blood cell counts'
    },
    {
        name:'Probuphine Implant',
        date:'16-06-2021',
        desc:'mental illness or psychosis'
    },
    {
        name:'Cymbalta',
        date:'14-03-2018',
        desc:'slow digestion'
    },
    {
        name:'Ativan',
        date:'28-10-2021',
        desc:'kidney or liver disease'
    },
    {
        name:'Methotrexate',
        date:'22-11-2022',
        desc:'low blood cell counts'
    }
]
const Medicines = (props) => {
    const[medicine] = useState(medicineList)
    return (
        <>  
            <main>
                <section>
                    <div className="container">
                        <div className="section-title pb-0">
                            <h2>Medicine List</h2>
                        </div>
                        <div className="row">
                            {
                                medicine.map((val,index) => <List key={index+1} index={index + 1} name={val.name} date={val.date} desc={val.desc}/>)
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Medicines;

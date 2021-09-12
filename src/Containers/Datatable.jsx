import React, { Component } from 'react';

class datatable extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [
                {
                    name: "amit",
                    age: 35,
                    salary: 40000,
                    bonus: 1000,
                    status: "true"                
                },
                {
                    name: "ajay",
                    age: 25,
                    salary: 38000,
                    bonus: 2000,
                    status: "false"                
                },
                {
                    name: "mayur",
                    age: 23,
                    salary: 50000,
                    bonus: 500,
                    status: "true"                
                },
                {
                    name: "jay",
                    age: 29,
                    salary: 35000,
                    bonus: 600,
                    status: "true"                
                },
                {
                    name: "raj",
                    age: 33,
                    salary: 22000,
                    bonus: 2000,
                    status: "true"                
                }
            ]
        }
    }
    
    render() {
        return (
            <>
                <table id="myTbl" width="90%" border="{1}" cellPadding="{10}" cellSpacing="{0}" style={{border: 'collapse'}}>
                    <thead>
                        <tr>
                            <th align="left">Name</th>
                            <th align="left">Age</th>
                            <th align="left">Salary</th>
                            <th align="left">Bonus</th>
                            <th align="left">Status</th>
                            {/* <th align="left">Total Expense</th> */}
                        </tr>
                    </thead>
                    <tbody id="dataHere">
                        {
                            this.state.data.map((ele,index) => {
                                return(
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                        <td>{ele.salary}</td>
                                        <td>{ele.bonus}</td>
                                        <td>{ele.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        );

    }
}

export default datatable;
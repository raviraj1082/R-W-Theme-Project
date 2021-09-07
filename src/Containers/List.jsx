import React from 'react';
import {Card,CardBody} from 'reactstrap';

const List = (props) => {
    return (
        <>           
            <div className='col-3 pt-4'>
                <Card>
                    <CardBody>
                        {
                            props.index !== undefined ? <h3>{props.index}</h3> : null
                        }
                        {
                            props.name !== undefined ? <h4>Name: {props.name}</h4> : null
                        }
                        {
                            props.name !== undefined ? <h5>Price: {props.price}</h5> : null
                        }
                        {
                            props.date !== undefined ? <h6>Date: {props.date}</h6> : null
                        }
                        {
                            props.desc !== undefined ? <p>Desc: {props.desc}</p> : null
                        }
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default List;
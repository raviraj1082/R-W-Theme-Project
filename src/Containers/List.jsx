import React from 'react';
import {Card,CardBody,Button} from 'reactstrap';

const List = (props) => {
    return (
        <>           
            <div className='col-3 pt-4' id={props.id}>
                <Card>
                    <CardBody>                       
                        {
                            props.index !== undefined ? <h3>{props.index}</h3> : null
                        }
                        {
                            props.name !== undefined ? <h4>{props.name}</h4> : null
                        }
                        {
                            props.price !== undefined ? <h5>Price:- {props.price}</h5> : null
                        }
                        {
                            props.price !== undefined ? <h5>Quantity:- {props.quantity}</h5> : null
                        }
                        {
                            props.expiry !== undefined ? <h6>Expiry:- {props.expiry}</h6> : null
                        }
                        {
                            props.desc !== undefined ? <p>Desc:- {props.desc}</p> : null
                        } 
                        {
                            props.btnGroup === true ? 
                                <>
                                    <Button onClick={props.editBtn} outline color="primary" size="sm" style={{marginRight:'10px'}}>Edit {props.propsBtnId}</Button>
                                    <Button onClick={props.deleteBtn} outline color="danger" size="sm">Delete {props.propsBtnId}</Button> 
                                </>
                            :
                                 null
                        }                                                                                                  
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default List;
import React from 'react';
import {Card,CardBody} from 'reactstrap';

const List = (props) => {
    return (
        <div className='col-3 pt-4'>
            <Card>
                <CardBody>
                    {
                        props.index !== undefined ? <h3>{props.index}</h3> : null
                    }
                    {
                        props.name !== undefined ? <h4>{props.name}</h4> : null
                    }
                    {
                        props.date !== undefined ? <h5>{props.date}</h5> : null
                    }
                    {
                        props.desc !== undefined ? <p>{props.desc}</p> : null
                    }
                </CardBody>
            </Card>
        </div>
    );
}

export default List;
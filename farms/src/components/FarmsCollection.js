import React, {useState} from 'react';
import { Segment } from 'semantic-ui-react';

export default () => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '1000px',
        margin: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
    }
    const [farms, setFarms] = useState([{
        "id": 1,
        "name": "Oakridge Farms"
    },
    {
        "id": 2,
        "name": "Birch Wood Farms"
    },{
        "id": 3,
        "name": "Magnolia Ranch"
    }])


    return (
        <Segment>
            {farms.map((f)=>(<p>{f.name}</p>))}
        </Segment>
    )
}
import React, {useState, useEffect} from 'react';
import { Segment } from 'semantic-ui-react';

export default () => {
    // state = {
    //     farms: []
    // }
    const [farms ,setFarms] = useState ([])
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '1000px',
        margin: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
    }

    useEffect (()=>{
        fetch('http://localhost:3000/farms')
        .then((r)=> r.json())
        .then((currfarms)=>{
            setFarms(currfarms)
        })
    },)

    // const [farms, setFarms] = useState([{
    //     "id": 1,
    //     "name": "Oakridge Farms"
    // },
    // {
    //     "id": 2,
    //     "name": "Birch Wood Farms"
    // },{
    //     "id": 3,
    //     "name": "Magnolia Ranch"
    // }])


    return (
        <Segment style={style}>
            {farms.map((f)=>(<Segment>{f.name}</Segment>))}
        </Segment>
    )
}
import React, {useEffect} from 'react';
import { Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions'

 const farmsSelector = state => {
     const {farms} = state
     console.log (farms)
     return farms
 }

export default () => {
    let farms = []
    // const style = {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     width: '1000px',
    //     margin: 'auto',
    //     justifyContent: 'center',
    //     flexDirection: 'row',
    // }

    const dispatch = useDispatch()
    farms = useSelector(farmsSelector)

    useEffect (()=>{
        fetch('http://localhost:3000/farms')
        .then((r)=> r.json())
        .then((currfarms)=>{
            dispatch({type: actions.FARMS_DATA_RECIEVED, farms: currfarms})
        })
    },[])

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
        <Segment>
            {/* {farms.map((f)=>(<Segment>{f.name}</Segment>))} */}
            {console.log (farms[0], 'FAR#FEACDCVER')}
        </Segment>
    )
}
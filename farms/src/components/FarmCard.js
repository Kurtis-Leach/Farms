import React from 'react';
import { Segment } from 'semantic-ui-react';

export default (props) => {

    return (
        <Segment>
            <h1>{props.farm.name}</h1>
        </Segment>
    )
}
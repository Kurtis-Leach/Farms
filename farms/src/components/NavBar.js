import React from 'react'
import { Segment, Message, Loader } from 'semantic-ui-react';

export default () => {
    return(
        <Segment>
            <Message>
            <Message.Header>NavBar</Message.Header>
            <Loader active></Loader>
        </Message>
        </Segment>
    )
}
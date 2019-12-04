import React from 'react'
import { Segment, Dropdown, Icon, List, Input, Image } from 'semantic-ui-react';
import '../assets/NavBar.css'

export default () => {
    return(
        <Segment>
            {/* <Message>
            <Message.Header>NavBar</Message.Header>
            <Loader active></Loader>
        </Message> */}
         <div>
                <Segment basic style={{ height: 200}}/>
                <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 100000 }}>
                    <Segment basic className='mainDiv' >
                        <List className='list'>
                            <List.Item className='listItem home'>
                                <a className="active nav-a" href="/">
                                    <Image src={'http://www.myiconfinder.com/uploads/iconsets/256-256-aae9a65dc4b6682999bd250efa231065-farmer.png'} size='small' />
                                </a>
                            </List.Item>
                            <List.Item className='listItemCart' size='large'>
                                <Segment basic>
                                    <Icon inverted color='green' name='shopping cart' size='huge'></Icon>
                                </Segment>
                            </List.Item>
                            <List.Item className='searchListItem'>
                                <Segment basic className='searchDiv'>
                                    <Input className='inputSearch' placholder='Search...' actionPosition='left' />
                                </Segment>
                            </List.Item>
                            
                            <List.Item className='signupListItem'>
                                        <Segment basic className='signupSegment'>
                                            <Dropdown closeOnBlur button text='Profile'>
                                            <Dropdown.Menu icon='arrow'>
                                                <Dropdown.Item disabled='true' text={<span>Signed in as </span>} />
                                                <Dropdown.Item text='Orders' />
                                                <Dropdown.Item text='Sign Out' />
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Segment>
                                    <Segment basic className='signupSegment'>
                                        <Dropdown closeOnBlur button text='Login/Sign Up'>
                                            <Dropdown.Menu>
                                                <Dropdown.Item text='Login' />
                                                <Dropdown.Item text='Sign Up' />
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Segment>
                            </List.Item>
                        </List>
                    </Segment>
                </div>
            </div>
        </Segment>
    )
}
import React, { Component } from 'react';
import Chats from './chats'
import Swipe from './swipe'
import Calls from './calls'
import Status from './status'
import { Container, Header, Left, Body, Right, Button, Icon, Title,H1,Content, Tabs, Tab } from 'native-base';

class Tabs1 extends Component {
    static navigationOptions = {
        header: null
    }
    state = {}
    render() {
        return (
            <Container>
                <Header>
                
                    <Left style={{ flexDirection: 'row' }}>
                        <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                    </Left>
                  
                    <Body>
                        <Title>WhatsApp</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <Content hasTabs>
                    <Tabs>
                        <Tab heading="Chats">
                            <Chats />
                        </Tab>
                        <Tab heading="Status">
                              <Status />
                        </Tab>
                        <Tab heading="Calls">
                           <Calls />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

export default Tabs1;

import React, { Component } from 'react';
import { Container, Icon,Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button } from 'native-base';

export default class Calls extends Component {
  render() {
    return (
      <Container>
       
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/dp.jpg')} />
              </Left>
              <Body>
                <Text>M.S Dhoni</Text>
                <Text note>
                    <Icon name="md-arrow-round-back" /> Today at 3:43 pm
                </Text>
              </Body>
              <Right>
              <Button transparent>
                    <Icon name='md-call' />
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/dp.jpg')} />
              </Left>
              <Body>
                <Text>Suresh Raina</Text>
                <Text note>
                    <Icon name="md-arrow-round-back" /> Today at 3:43 pm
                </Text>
              </Body>
              <Right>
              <Button transparent>
                    <Icon name='md-call' />
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/dp.jpg')} />
              </Left>
              <Body>
                <Text>Rohit Sharma</Text>
                <Text note>
                    <Icon name="md-arrow-round-back" /> Today at 3:43 pm
                </Text>
              </Body>
              <Right>
              <Button transparent>
                    <Icon name='md-call' />
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            
          </List>
          
        </Content>
      </Container>
    );
  }
}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class Chats extends Component {
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
                <Text>Suresh Raina</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/dp.jpg')} />
              </Left>
              <Body>
                <Text>Rohit Sharma</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/dp.jpg')} />
              </Left>
              <Body>
                <Text>M.S.Dhoni</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/dp.jpg')} />
              </Left>
              <Body>
                <Text>Shikar Dhawan</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>

        </Content>
      </Container>
    );
  }
}
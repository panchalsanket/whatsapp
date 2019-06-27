import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardItem, Container,Thumbnail, Header, Left, Right, Icon, Text, Content, Body } from 'native-base';
import HomeScreen from './homescreen'
import { Image } from 'react-native';
export default class MyNotificationsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row' }}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>

          <Right>
            <Icon name="md-cart" style={{ color: 'white' }} />
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem >
             <CardItem bordered>
              <Icon active name="logo-facebook" />
              <Text>Facebook</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered>
              <Icon active name="logo-twitter" />
              <Text>Twitter</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered>
              <Icon active name="logo-instagram" />
              <Text>Instagram</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered>
              <Icon active name="logo-youtube" />
              <Text>Youtube</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/download.jpeg')} style={{height: 50, flex: 1}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/download.jpeg')} style={{height: 150, width: 100, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}//End of MyNotificationsScreen class
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator,Left, Right, Thumbnail, Body } from 'native-base';
import { StyleSheet } from 'react-native';
export default class Status extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Separator bordered>
                        <Text style={styles.titleText}>My Status</Text>
                    </Separator>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../images/dp.jpg')} />
                        </Left>
                        <Body>
                            <Text>Suresh Raina</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    <Separator bordered>
                        <Text style={styles.titleText}>Recent Updates</Text>
                    </Separator>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../images/dp.jpg')} />
                        </Left>
                        <Body>
                            <Text>MS Dhoni</Text>
                        </Body>
                        <Right>
                            <Text note>2:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../images/dp.jpg')} />
                        </Left>
                        <Body>
                            <Text>Shikar Dhawan</Text>
                        </Body>
                        <Right>
                            <Text note>1:43 pm</Text>
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text style={styles.titleText}>View Update</Text>
                    </Separator>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });
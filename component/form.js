import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Picker, Label, Left, Right, Icon, Button, Text } from 'native-base';

class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
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
                <Content>
                    <Form>
                        <Item disabled>
                            <Input disabled placeholder='Disabled Textbox' />
                            <Icon name='information-circle' />
                        </Item>
                        <Item success>
                            <Input placeholder='Textbox with Success Input' />
                            <Icon name='checkmark-circle' />
                        </Item>
                        <Item>
                            <Icon active name='home' />
                            <Input placeholder='Icon Textbox' />
                        </Item>

                        <Item floatingLabel style={style.itemstyle}>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={style.itemstyle}>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item>
                            <Item picker style={style.itemstyle}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Wallet" value="key0" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                            </Item>
                        </Item>
                        <Button block>
                            <Text>Submit</Text>
                        </Button>
                        <Icon type="FontAwesome" name="home" />

                    </Form>
                </Content>
            </Container>
        );
    }
}
const style = {
    itemstyle: {
        margin: 15
    }
}
export default Form1;

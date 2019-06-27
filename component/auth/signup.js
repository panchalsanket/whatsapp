import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { Container, Content, Form, Item, Icon, Text, Input, Label, Button } from 'native-base';
import {addUserDetail} from '../../actions/whatsapp'
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux'

 class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign-Up',
        headerStyle: {
            backgroundColor: '#3F51B5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    
    constructor(props) {
        super(props)
        this.state = {

            uname: '',
            password: '',
            number: '',
            img: require('../../images/dp.jpg'),
        }

    }
    
    handleImgChange = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
            //   const source = { uri: response.uri };
          
              // You can also display the image using data:
               source = { uri: 'data:image/jpeg;base64,' + response.data };
             
              this.setState({
                img: source
              });
            }
          });
        
    }
    submit = () => {
        this.props.dispatch(addUserDetail(this.state))
        this.props.navigation.navigate('tab')

    }
    render() {
        return (
            <Content>
                <View style={{ flex: 1 }}>
                    <Form style={{ flex: 1 }} >
                        <View style={styles.container}>
                            <View style={styles.CircleShapeView}>
                                <Image source={this.state.img} style={{ width: 120, height: 120, borderRadius: 40 }} />
                            </View>
                            <View>
                                <Button iconLeft onPress={this.handleImgChange}>
                                    <Icon name="upload" type="FontAwesome" />
                                    <Text>Profile Photo</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <Item floatingLabel>
                                <Label style={styles.label}>Username</Label>
                                <Input type="text" name="uname" value={this.state.uname} onChangeText={this.handleNameChange} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>Password</Label>
                                <Input type="text" name="password" value={this.state.password} onChangeText={this.handlePasswordChange} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>Moblie Number</Label>
                                <Input type="number" name="number" value={this.state.number} onChangeText={this.handleNumberChange} />
                            </Item>
                        </View>
                        <View style={styles.container3}>
                            <Button rounded onPress={this.submit}>
                                <Text>Submit</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
            </Content>
        );
    }
    handleNameChange = (text)  =>{
        this.setState({ uname: text })
    }
    handlePasswordChange = (text) => {
        this.setState({ password: text })
    }
    handleNumberChange = (text) => {
        this.setState({ number: text })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,


    }, container2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,


    },
    container3: {
        marginLeft: 150,
        marginTop: 10

    },

    CircleShapeView: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        margin: 5

    },
    label: {
        fontWeight: 'bold',
        color: 'black',

    }
})
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  export default connect()(SignUp)
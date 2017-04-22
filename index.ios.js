
import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox,Right } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            <Container>
                
                    <Button transparent>
                        <Icon name='ios-settings' />
                    </Button>
                
                
                    <Title>Logo</Title>
                
                <Right>
                    <Button transparent>
                        <Icon name='plus' />
                    </Button>
                </Right>
        </Container>

        );
    }
    
}

AppRegistry.registerComponent('index', () => index);
class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
      </View>

    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
AppRegistry.registerComponent('index', () => index);
class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
      </View>

    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
import React, {Component} from 'react';
import {View, AppRegistry, ScrollView, Text} from 'react-native';
import CheckBox from 'react-native-icon-checkbox';
import { List, ListItem } from 'react-native-elements';
 
export default class things extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isRadioSelected: false,
    };
  }
 
 
  handleSelectedRadionButton = (checked) => {
    this.setState({
      isRadioSelected: checked,
    });
  }
 
  render() {
    return (
      <ScrollView>

        <List>
          <ListItem hideChevron
            leftIcon={{ name: 'radio-button-unchecked' }}
            title="期中考"
          />            
                       
          
          
            <View style={{ flex: 1, paddingLeft: 14, margin: 7, borderBottomWidth: 0.2 }}>
        {/* You can use other Icon */}
        {/* Here is the example of Radio Icon */}
        <CheckBox
          label='期末考'
          size={26}
          checked={this.state.isRadioSelected}
          onPress={this.handleSelectedRadionButton}
          uncheckedIconName="radio-button-unchecked"
          checkedIconName="radio-button-checked"
        />
        </View>
          
          <ListItem hideChevron
            leftIcon={{ name: 'add' }}
          />
        </List>
        <List >
          <ListItem
            title ="顯示已完成的項目"
        
          />
        </List>
      </ScrollView>
      // <View style={{ flex: 1, padding: 20 }}>
      //   {/* You can use other Icon */}
      //   {/* Here is the example of Radio Icon */}
      //   <CheckBox
      //     label='期中考'
      //     size={30}
      //     checked={this.state.isRadioSelected}
      //     onPress={this.handleSelectedRadionButton}
      //     uncheckedIconName="radio-button-unchecked"
      //     checkedIconName="radio-button-checked"
      //   />
      // </View>
    );
  }
}

AppRegistry.registerComponent('wk8', () => things);
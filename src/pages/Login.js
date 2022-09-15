import * as React from 'react';
import * as Battery from 'expo-battery';
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  state = {
    batteryLevel: null,
  };
  componentDidMount() {
    this._subscribe();
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  }
  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }
  render() {
    return (
      <View style={styles.container}>
        <div class="progress">
           <div class="progress-bar" role="progressbar" style="width: {this.state.batteryLevel}%;" aria-valuenow="{this.state.batteryLevel}" aria-valuemin="0" aria-valuemax="100">{this.state.batteryLevel}%</div>
       </div>
        <Text>Nivel da Bateria: {this.state.batteryLevel}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    left: 0,
    right: 0
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
  }
 }); 

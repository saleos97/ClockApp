import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class AlarmScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Alarm</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default AlarmScreen;
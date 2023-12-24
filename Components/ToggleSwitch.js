import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>

      <Switch
        trackColor={{ false: '#ffffff', true: '#ffa500' }}
        thumbColor={isEnabled ? '#ffffff' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default ToggleSwitch;

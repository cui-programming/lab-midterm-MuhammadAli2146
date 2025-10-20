import React from 'react';
import { View, StyleSheet } from 'react-native'; // Import StyleSheet for defining styles
import { Text } from '../ui'; // ✅ using Text from ui (as teacher said)

export default function TeacherMessage() {
  return (
    <View>
      <Text>
        Message from your teacher is to Keep learning and practicing!
      </Text>
    </View>
  );
}

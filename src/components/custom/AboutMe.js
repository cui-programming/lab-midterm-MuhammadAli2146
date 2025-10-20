import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';
import { Text } from '../ui';

/**
 * Custom/AboutMe
 * Shows name and registration number at the top with aesthetic styling.
 * Props: name (string), regNo (string)
 */
export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.studentName}>{name}</Text>
      <Text style={styles.studentId}>{regNo}</Text>
      <Text style={styles.teacherMessage}>
        Message from your teacher is to Keep learning and practicing!
      </Text>
    </View>
  );
}
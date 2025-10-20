import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // Increment function
  const increment = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Decrement function
  const decrement = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // Render each row with aesthetic buttons
  const renderItem = ({ item }) => (
    <View style={styles.itemRow} key={item.id}>
      <Text style={styles.itemName}>{item.phrase}</Text>

      <View style={styles.counterRow}>
        {/* Increment Button - Green */}
        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]}
          onPress={() => increment(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {/* Counter Display */}
        <Text style={styles.counter}>{item.count}</Text>

        {/* Decrement Button - Red */}
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]}
          onPress={() => decrement(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      {items.map(item => renderItem({ item }))}
    </View>
  );
}
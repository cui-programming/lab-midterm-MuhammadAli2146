import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Text, TextInput } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function SearchAndAdd() {
  const [items, setItems] = useState(initialAzkaar);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [addFocused, setAddFocused] = useState(false);

  // Filtered list
  const filteredItems = items.filter(item =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  // Add new phrase
  const addPhrase = () => {
    if (!newPhrase.trim()) return; // skip empty
    const exists = items.some(it => it.phrase.toLowerCase() === newPhrase.toLowerCase());
    if (exists) return; // skip duplicate

    const newItem = {
      id: Date.now().toString(),
      phrase: newPhrase,
      count: 0,
    };
    setItems([...items, newItem]);
    setNewPhrase('');
  };

  return (
    <View style={styles.searchSection}>
      <Text style={styles.sectionTitle}>Search & Add Azkaar</Text>

      {/* Search Box */}
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={[styles.input, searchFocused && styles.inputFocused]}
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
        placeholderTextColor="#94a3b8"
      />

      {/* Add Box */}
      <View style={styles.row}>
        <TextInput
          placeholder="Add new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={[styles.input, addFocused && styles.inputFocused, { flex: 1, marginBottom: 0 }]}
          onFocus={() => setAddFocused(true)}
          onBlur={() => setAddFocused(false)}
          placeholderTextColor="#94a3b8"
        />
        <TouchableOpacity 
          style={styles.addButton}
          onPress={addPhrase}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {/* List of Azkaar */}
      {filteredItems.length > 0 ? (
        <FlatList
          data={filteredItems}
          keyExtractor={item => item.id}
          style={styles.azkaarList}
          renderItem={({ item }) => (
            <View style={styles.azkaarItem}>
              <Text style={styles.azkaarText}>{item.phrase}</Text>
              <Text style={styles.azkaarCount}>Count: {item.count}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyState}>
          {search ? 'No matching azkaar found' : 'Start adding your azkaar'}
        </Text>
      )}
    </View>
  );
}
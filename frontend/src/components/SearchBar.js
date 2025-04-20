// src/components/SearchBar.js

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { theme } from '../utils/theme';

const SearchBar = ({ query, setQuery, search }) => {
  return (
    <TextInput
      placeholder="Rechercher un anime"
      placeholderTextColor="#888"
      value={query}
      onChangeText={setQuery}
      onSubmitEditing={search}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: theme.colors.inputBackground,
    padding: 10,
    marginBottom: 10,
    color: theme.colors.text,
  },
});

export default SearchBar;

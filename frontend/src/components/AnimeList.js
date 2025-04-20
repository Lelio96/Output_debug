// src/components/AnimeList.js

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../utils/theme';

const AnimeList = ({ result, watch }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.title}</Text>
      <Text style={styles.link}>URL: {result.link}</Text>
      {result.options && result.options.map((opt, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => watch(opt.link)}
          style={styles.option}
        >
          <Text style={styles.optionText}>{opt.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: theme.fontSize.large,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  link: {
    color: '#bbb',
  },
  option: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  optionText: {
    color: theme.colors.buttonBackground,
  },
});

export default AnimeList;

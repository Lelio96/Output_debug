// src/screens/HomeScreen.js

import React, { useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import AnimeList from '../components/AnimeList';
import { theme } from '../utils/theme';
import config from '../utils/config'; // ⬅️ import de l'URL

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const search = async () => {
    setResult(null);

    try {
      const res = await fetch(`${config.SERVER_URL}/search/${query}`);
      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      alert('Erreur de connexion');
    }
  };

  const watch = (link) => {
    navigation.navigate('Video', { link });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background, padding: 20 }}>
      <SearchBar query={query} setQuery={setQuery} search={search} />
      {result && <AnimeList result={result} watch={watch} />}
    </ScrollView>
  );
}

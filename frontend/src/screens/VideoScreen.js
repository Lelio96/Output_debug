// src/screens/VideoScreen.js

import React from 'react';
import { ScrollView } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoScreen({ route }) {
  const { link } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
      <VideoPlayer videoLink={link} />
    </ScrollView>
  );
}

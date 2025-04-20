// src/components/VideoPlayer.js

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { theme } from '../utils/theme';

const VideoPlayer = ({ videoLink }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Lien du lecteur :</Text>
      <Text
        style={styles.link}
        selectable
        onPress={() => Linking.openURL(videoLink)}
      >
        {videoLink}
      </Text>
      <WebView
        source={{ uri: videoLink }}
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    color: theme.colors.text,
    marginBottom: 10,
  },
  link: {
    color: theme.colors.link,
  },
  webView: {
    width: '100%',
    height: 300,
  },
});

export default VideoPlayer;

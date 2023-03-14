import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import TituloSecao from '../components/TituloSecao.jsx';
import CardFilme from '../components/CardFilme.jsx';

export default function Home() {
  const lost = {
    poster:
      'https://www.themoviedb.org/t/p/w200/47RazdqbtMmDxKHskObbHkc2D3o.jpg',
    nota: 9.7,
  };

  const titanic = {
    poster:
      'https://www.themoviedb.org/t/p/w200/MlnPG3oxhfmuiDwcoeElQWui9m.jpg',
    nota: 8.9,
  };

  return (
    <View style={styles.container}>
      <View>
      <TituloSecao texto="Filmes em alta" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardFilme filme={lost} />
        <CardFilme filme={titanic} />
      </ScrollView>
      </View>

      <TituloSecao texto="Séries em alta" />
      <TituloSecao texto="Dramas" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
    padding: 8,
  },
});

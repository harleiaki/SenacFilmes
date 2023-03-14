import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function CardFilme({ filme }){
  const [ favorito, setFavorito ] = useState(false)
  
  return(
    <View style={styles.card}>
      <TouchableOpacity>
        <TouchableOpacity onPress={() => setFavorito(!favorito)}>
          <MaterialIcons style={styles.favorito}
                name={favorito?"favorite":"favorite-border"} 
                size={24} 
                color={favorito?"red":"white"} 
            />
        </TouchableOpacity>
        <Image 
          style={styles.poster}
          source={{uri: filme.poster }} />
        <View style={styles.viewNota}>
          <AntDesign name="star" size={18} color="gold" />
          <Text style={styles.nota}>{filme.nota}</Text>
        </View>
      </TouchableOpacity>

        
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    backgroundColor: '#2d2d2d',
    borderRadius: 5,
    alignItems:'center',
    marginVertical: 8,
    marginHorizontal:4
  },
  nota: {
    color: '#FFF',
    marginVertical: 4
  }, 
  poster :{
    height: 180,
    width: 120,
    borderRadius: 5, 
    zIndex: -1
  },
  viewNota: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }, 
  favorito:{
    position: 'absolute',
    right: -50,
    top: 5
  }
})


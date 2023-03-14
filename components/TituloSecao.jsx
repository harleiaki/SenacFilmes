import {StyleSheet, Text} from 'react-native'

export default function TituloSecao(props){
  return(
    <Text style={styles.tituloSecao}>{props.texto}</Text>
  )
}

const styles = StyleSheet.create({
  tituloSecao: {
    color: '#FFF',
    fontSize: 16,
    borderLeftColor: '#F06',
    borderLeftWidth: 4,
    marginTop: 7,
    paddingLeft: 2
  }
});
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colorTypePokemons from '../utils/colorTypePokemons'

const ListPokemon = ({ item }) => {
  const { back_default, back_shiny, front_default, front_shiny, id, name, types, height, weight } = item

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{ uri: front_default }}
          resizeMode='contain'
        />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.textName}>{name.charAt(0).toUpperCase() + name.slice(1)} <Text style={styles.textId}>Nº {id}</Text></Text>
        <Text style={styles.textDescription}>Altura: <Text style={styles.text}>{(height * 0.1).toFixed(1)}</Text> m</Text>
        <Text style={styles.textDescription}>Peso: <Text style={styles.text}>{(weight * 0.1).toFixed(1)}</Text> Kg</Text>
        <Text style={styles.textDescription}>Tipo:</Text>
        <View style={styles.containerTypes}>
          {types.map((item, index) =>
            <Text
              style={[styles.types, colorTypePokemons(item.type.name)]}
              key={index}
            >{item.type.name}</Text>
          )}
        </View>
      </View>

    </View>
  )
}

export default ListPokemon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 7,
    backgroundColor: "#FFC9C9",
    margin: 5,
    flexDirection: 'row'
  },
  containerImg: {
    flex: 2,
  },
  img: {
    flex: 1,
    height: 200
  },
  containerDescription: {
    flex: 3,
    gap: 5,
  },
  textName: {
    fontFamily: "Amaranth_700Bold",
    color: "black",
    textAlign: 'center',
    fontSize: 32
  },
  textId: {
    fontSize: 16
  },
  textDescription: {
    fontFamily: "Amaranth_700Bold",
    color: "black",
    fontSize: 20
  },
  text: {
    fontFamily: "Amaranth_400Regular",
  },
  containerTypes: {
    // justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5
  },
  types: {
    borderRadius: 7,
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 25,
    paddingVertical: 2,
    fontSize: 20,
    fontFamily: "Amaranth_400Regular",
  },
})
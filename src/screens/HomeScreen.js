import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../store/features/PokemonSlice'
import { ListPokemon } from '../components'
import FetchApiPokemon from '../utils/FetchApiPokemon'
import { COLORS } from '../global/Colors'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const [currenSeasons, setCurrenSeasons] = useState([0, 151])
  const [isLoadingSeason, setIsLoadingSeason] = useState(false)
  const pokemons = useSelector(state => state.pokemonReducer.pokemons)

  const handleChangeSeason = (season) => {
    switch (season) {
      case "uno":
        return setCurrenSeasons([0, 151])
      case "dos":
        return setCurrenSeasons([151, 100])
      case "tres":
        return setCurrenSeasons([251, 135])
      case "cuatro":
        return setCurrenSeasons([386, 108])
      case "cinco":
        return setCurrenSeasons([494, 155])
      case "seis":
        return setCurrenSeasons([649, 72])
      case "siete":
        return setCurrenSeasons([721, 88])
      case "ocho":
        return setCurrenSeasons([809, 96])
      default:
        return setCurrenSeasons([0, 151])
    }
  }

  useEffect(() => {
    (async () => {
      setIsLoadingSeason(true)
      const result = await FetchApiPokemon(currenSeasons)

      dispatch(getPokemons(result))
      setIsLoadingSeason(false)
    })()
  }, [currenSeasons])

  return (
    <View style={styles.container}>

      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("uno")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 1</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("dos")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 2</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("tres")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 3</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("cuatro")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 4</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("cinco")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 5</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("seis")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 6</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("siete")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 7</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
          }]}
          onPress={() => handleChangeSeason("ocho")}
          disabled={isLoadingSeason}
        >
          <Text style={styles.txtBtn}>Temporada 8</Text>
        </Pressable>
      </View>

      {isLoadingSeason ?
        <View style={styles.loadgin}>
          <ActivityIndicator size="large" />
        </View>
        :
        <FlatList
          data={pokemons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ListPokemon item={item} />}
        />
      }

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadgin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    margin: 5,
    flexWrap: 'wrap',
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  txtBtn: {
    color: "white"
  }
})
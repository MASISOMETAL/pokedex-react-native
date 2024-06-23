import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { handleChangeSeason } from '../utils/handleChangeSeason'
import { COLORS } from '../global/Colors'

const SeasonsButtons = ({ isLoadingSeason, setCurrenSeasons }) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("uno", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 1</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("dos", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 2</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("tres", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 3</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("cuatro", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 4</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("cinco", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 5</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("seis", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 6</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("siete", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 7</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.btn, {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: isLoadingSeason ? "grey" : COLORS.primary
        }]}
        onPress={() => handleChangeSeason("ocho", setCurrenSeasons)}
        disabled={isLoadingSeason}
      >
        <Text style={styles.txtBtn}>Temporada 8</Text>
      </Pressable>
    </View>
  )
}

export default SeasonsButtons

const styles = StyleSheet.create({
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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubTitle from './SubTitle'
import TrophieItem from './TrophieItem'

const TrophieCard = ({competition, seasons, titles}) => {
  return (
    <View style={styles.cardContainer}>
      <SubTitle>{competition} - {titles}</SubTitle>

      <View style={styles.trophiesContainer}>
        {
            seasons.map( (season) => (
                <TrophieItem key={season}>{season}</TrophieItem>
            ))
        }
      </View>
    </View>
  )
}

export default TrophieCard

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trophiesContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: "100%"
    }
})
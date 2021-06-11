import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CardBButtom(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        shadowOffset:{ width:1, height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        textShadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
        backgroundColor:'#a4fcbf',

    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,
        alignItems: 'flex-start',
        backgroundColor:'#a4fcbf',
    }
})
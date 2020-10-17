import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { calculateDate } from '../services/time';

const Item = ({holderName, date, name, isSelected, onSelect, onRemove}) => {
  return (
      <TouchableHighlight style={styles.viewArea} onPress={()=>onSelect()}>
        <>
          <View style={styles.textWrapper}>
            <Text style={[styles.text, styles.holderText]}>{holderName}</Text>
            <Text style={[styles.text, styles.descriptionText]}>{name}</Text>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={[styles.text, styles.dateText]}>{calculateDate(date, new Date)}</Text>
            { isSelected && <TouchableHighlight style={styles.button} onPress={()=>onRemove()}>
              <MaterialCommunityIcons name="trash-can-outline" color='white' size={25}/>
            </TouchableHighlight> }
          </View>
        </>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
    viewArea: {
        borderBottomWidth: 1,
        borderBottomColor: '#242424',
        paddingBottom:15,
        paddingTop:15,
        flexDirection: 'row'
    },
    textWrapper: {
      flex: 1
    },
    holderText: {
    },
    dateText: {
      fontSize: 15,
    },
    descriptionText: {
      color: '#919191',
    },
    text: {
      fontSize: 20,
      color: 'white'
    },
    dateWrapper: {
      alignItems: 'flex-end'
    },
    button: {
      width: 50,
      alignItems: 'center'
    },

});

export default Item;

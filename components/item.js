import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({holderName, date, name, isSelected, onSelect, onRemove}) => {
  return (
      <TouchableHighlight style={styles.viewArea} onPress={()=>onSelect()}>
        <>
          <Text style={[styles.text, styles.dateText]}>{date}</Text>
          <View style={styles.flexContainer}>
            <View style={styles.textWrapper}>
              <Text style={[styles.text, styles.holderText]}>{holderName}</Text>
              <Text style={[styles.text, styles.descriptionText]}>{name}</Text>
            </View>
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
    },
    flexContainer: {
      flexDirection: 'row'
    },
    textWrapper: {
      flex: 8
    },
    holderText: {
    },
    dateText: {
      flex: 1,
      fontSize: 15,
      textAlign: 'right'
    },
    descriptionText: {
      color: '#919191',
    },
    text: {
      fontSize: 20,
      color: 'white'
    },
    button: {
      flex: 1,
      justifyContent: 'center',
    }
});

export default Item;

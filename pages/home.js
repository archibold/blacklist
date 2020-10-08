import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Item from '../components/item';
import { getList as getListService} from '../services/storage';
import { removeHolder as removeHolderService} from '../services/storage';

const Home = () => {
  const [list, setList] = useState([]);
  const [isSelected, setIsSelected] = useState();

  const onSelectHolder = (index) => {
    setIsSelected(index);
  }

  async function fetchData () {
    const data = await getListService();
    setList(data);
  }

  const onRemove = (index) => {
    removeHolderService(index)
    .then(() => {
      return fetchData();
    }).then(() => {
      setIsSelected(null);
    })
  }

  useFocusEffect(
   React.useCallback(() => {
     fetchData()
     return () => {};
   }, [])
  );

  return (
    <>
      <View style={styles.viewArea} onStartShouldSetResponder={() => setIsSelected(null)}>
        <Text style={styles.text}>Black list</Text>
        <ScrollView>
          {list.length > 0 ? list.map((item, index) =>
            <Item
              key={index}
              holderName={item.holderName}
              date={item.date}
              name={item.name}
              isSelected={isSelected === index}
              onSelect={() => onSelectHolder(index)}
              onRemove={() => onRemove(index)}
            />
          ) : []}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    viewArea: {
        flex: 1,
        padding: 15,
        backgroundColor: 'black',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white'
    }
});

export default Home;

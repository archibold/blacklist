import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import { setHolder as setHolderService} from '../services/storage';

const Add = ({navigation}) => {
  const [holderName, setHolderName] = useState('');
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  let _nameInput = React.createRef();
  let _holderNameInput = React.createRef();
  const isButtonDisabled = name === '' || holderName === '';

  const save = () => {
    const data = {
      holderName,
      date,
      name
    }
    setHolderName('');
    setDate(new Date());
    setName('');
    _holderNameInput.focus();
    setHolderService(data).then(() => navigation.navigate('Home'));
  }

  const _next = () => {
    _nameInput && _nameInput.focus();
  };

  return (
    <>
      <View style={styles.viewArea}>
        <Text style={styles.text}>Name of holder</Text>
        <TextInput
          value={holderName}
          ref={ref => {_holderNameInput = ref}}
          style={styles.input}
          placeholder="type here..."
          placeholderTextColor="#242424"
          onChangeText={text => setHolderName(text)}
          onSubmitEditing={() => _next()}></TextInput>

        <Text style={styles.text}>Description</Text>
        <TextInput
          value={name}
          ref={ref => {_nameInput = ref}}
          style={styles.input}
          placeholder="type here..."
          placeholderTextColor="#242424"
          onChangeText={text => setName(text)}></TextInput>
        <Text style={styles.text}>From</Text>
        <DatePicker
          style={styles.datepicker}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconComponent={<MaterialCommunityIcons name="calendar" color='white' size={25} />}
          customStyles={{
            dateText: {
              color: 'white',
              fontSize: 20
            },
            dateInput:{ alignItems: "flex-start", borderWidth: 0 },
            datePicker: {
              backgroundColor: "#222",
              color: 'white'
            }
          }}
          onDateChange={(date) => {setDate(date)}}
        />
        {!isButtonDisabled  && <Button title="Save" onPress={() => save()} />}
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
      fontSize: 20,
      color: 'white'
    },
    datepicker: {
      fontSize: 15,
    },
    input: {
      fontSize: 20,
      marginBottom: 10,
      color: 'white',
      padding:15,
      paddingLeft: 0,
      paddingRight: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#242424',
    }
});

export default Add;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, editTodo} from '../redux/TodoSlice';

import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../redux/store';

export default function Dashboard({navigation}) {
  const [newTodo, setNewTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    id: '',
    task: '',
  });
  const todo = useSelector(state => state.todo);
  // const userInfo = useSelector(state=>JSON.parse(state.userInfo))

  useEffect(()=>{
    if(!store.getState().userInfo){
      navigation.navigate("Login")
    }
  })

  // console.log(userInfo.user.email);
  console.log(todo);
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    dispatch(addTodo(newTodo));
  };

  const handleDelete = item => {
    dispatch(deleteTodo(item));
  };

  const handleEdit = item => {
    setData({id: item.id, task: item.task});
    setIsEditing(true);
  };

  const handleChange = e => {
    setData({
      ...data,
      task: e,
    });
  };

  const {id, task} = data;

  const handleUpdate = () => {
    dispatch(editTodo({id, task}));
    setIsEditing(false);
  };

  return (
    <View style={style.container}>
      {isEditing ? (
        <View>
          <TextInput
            value={task}
            style={[style.inputField, {marginBottom: 10}]}
            placeholder={'write something'}
            onChangeText={e => handleChange(e)}
          />
          <Button title="cancel" onPress={() => setIsEditing(false)} />
          <Button title="Confirm Edit" onPress={handleUpdate} />
        </View>
      ) : (
        <View>
          <TextInput
            style={style.inputField}
            placeholder={'write something'}
            onChangeText={e => setNewTodo(e)}
          />
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Button
              disabled={newTodo ? false : true}
              title="click to add Todo"
              onPress={handleCreateTodo}
            />
          </View>
          <View>
            {todo &&
              todo.map((item, index) => {
                return (
                  <View key={index} style={style.onnumilla}>
                    <Text style={style.fontNormal}>{item.task}</Text>
                    <View style={style.icons}>
                      <TouchableOpacity onPress={() => handleEdit(item)}>
                        <Icon
                          name="pencil"
                          size={20}
                          style={{marginRight: 12}}
                          color="#900"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDelete(item.id)}>
                        <Icon name="times" size={23} color="#900" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginLeft: '1%',
    marginRight: '1%',
  },
  inputField: {
    borderBottomWidth: 1,
  },
  onnumilla: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '5%',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontNormal: {
    fontSize: 18,
    width: '80%',
  },
});

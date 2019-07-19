/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { addTodo, setText } from './src/actions/todos';
import setUser from './src/actions/user';

class App extends React.Component {
  state = {
    todoText: '',
  };

  _renderItem({ item, index }) {
    console.log('render ıtem : ', item);
    return (
      <View>
        <Text style={{ color: 'purple', borderBottomWidth: 1, padding: 5 }}>
          item {index + 1}. : {item.text}
        </Text>
      </View>
    );
  }

  render() {
    const { todos, onChangeText, addTodo, user, onChangeUser } = this.props;
    console.log('props : ', this.props);
    return (
      <Fragment>
        <View>
          <Text style={styles.title}> Username: </Text>
          <TextInput
            value={user.name}
            style={styles.inputTodo}
            onChangeText={name => onChangeUser(name)}
          />
        </View>
        <View>
          <View>
            <Text style={styles.title}> Todo list </Text>
            <TextInput
              value={todos.todoText}
              style={styles.inputTodo}
              onChangeText={todoText => onChangeText(todoText)}
              onSubmitEditing={() => addTodo()}
            />
          </View>
          <FlatList
            style={{
              padding: 5,
            }}
            data={todos.todos}
            keyExtractor={item => item.id}
            renderItem={this._renderItem}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  inputTodo: {
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  addTodo: () => {
    return dispatch(addTodo());
  },
  onChangeText: text => dispatch(setText(text)),
  onChangeUser: name => dispatch(setUser(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

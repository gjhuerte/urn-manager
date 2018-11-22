import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC6nnVpSUU_z3YMMn38YxSFOlcu0guGuQU',
            authDomain: 'manager-6226f.firebaseapp.com',
            databaseURL: 'https://manager-6226f.firebaseio.com',
            projectId: 'manager-6226f',
            storageBucket: 'manager-6226f.appspot.com',
            messagingSenderId: '950176402011'
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm /> 
            </Provider>
        );
    }
}

export default App;
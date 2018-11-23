import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk'
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm /> 
            </Provider>
        );
    }
}

export default App;
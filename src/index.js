import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import "./styles/styles.scss"
import store from './redux/store';
import { getAllSpecialities } from './redux/actionsCreators';

store.dispatch(getAllSpecialities())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);



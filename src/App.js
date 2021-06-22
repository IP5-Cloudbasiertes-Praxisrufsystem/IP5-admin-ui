import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import {UserList} from "./components/users";
import {ClientsList} from "./components/clients";


function App() {
  return (
      <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList}/>
        <Resource name='clients/all' list={ClientsList}/>
      </Admin>
  );
}

export default App;

import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from "./authProvider";
import MyLoginPage from "./MyLoginPage";
import {UserList} from "./components/users";
import {ClientsList} from "./components/clients";


function App() {
  return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name='users' list={UserList}/>
        <Resource name='clients/all' list={ClientsList}/>
      </Admin>
  );
}

export default App;

import './App.css';
import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from "./authProvider";
import {UserList, UserCreate, UserEdit} from "./components/users";
import {ClientCreate, ClientEdit, ClientsList} from "./components/clients";
import {ConfigurationCreate, ConfigurationEdit, ConfigurationList} from "./components/configurations";


function App() {
  return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name='clients' list={ClientsList} edit={ClientEdit} create={ClientCreate}/>
        <Resource name='configurations' list={ConfigurationList} edit={ConfigurationEdit} create={ConfigurationCreate}/>
      </Admin>
  );
}

export default App;

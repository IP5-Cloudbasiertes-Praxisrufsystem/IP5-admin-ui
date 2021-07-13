import './App.css';
import { Admin, Resource, EditGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from "./authProvider";
import {UserList, UserCreate, UserEdit} from "./components/users";
import {ClientCreate, ClientEdit, ClientsList} from "./components/clients";


function App() {
  return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name='clients' list={ClientsList} edit={ClientEdit} create={ClientCreate}/>
      </Admin>
  );
}

export default App;

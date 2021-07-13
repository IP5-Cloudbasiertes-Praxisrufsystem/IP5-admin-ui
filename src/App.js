import './App.css';
import { Admin, Resource, EditGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from "./authProvider";
import {UserList, UserCreate, UserEdit} from "./components/users";
import {ClientsList} from "./components/clients";


function App() {
  return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name='clients/all' list={ClientsList}/>
      </Admin>
  );
}

export default App;

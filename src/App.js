import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import {UserList} from "./components/users";


function App() {
  return (
      <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList}/>
      </Admin>
  );
}

export default App;

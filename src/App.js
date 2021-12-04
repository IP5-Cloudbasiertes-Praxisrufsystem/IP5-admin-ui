import './App.css';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from "./authProvider";
import {UserList, UserCreate, UserEdit} from "./components/users";
import {ClientCreate, ClientEdit, ClientsList} from "./components/clients";
import {NotificationTypeList, NotificationTypeEdit, NotificationTypeCreate} from "./components/notificationtypes";
import {ConfigurationCreate, ConfigurationEdit, ConfigurationList} from "./components/configurations";
import {CallGroupCreate, CallGroupEdit, CallGroupList} from "./components/callgroups"


function App() {
  return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name='clients' list={ClientsList} edit={ClientEdit} create={ClientCreate}/>
        <Resource name='notificationtypes' list={NotificationTypeList} edit={NotificationTypeEdit} create={NotificationTypeCreate} options={{ label: 'Notification Types' }}/>
        <Resource name='configurations' list={ConfigurationList} edit={ConfigurationEdit} create={ConfigurationCreate}/>
        <Resource name='callgroups' list={CallGroupList} edit={CallGroupEdit} create={CallGroupCreate}/>
      </Admin>
  );
}

export default App;

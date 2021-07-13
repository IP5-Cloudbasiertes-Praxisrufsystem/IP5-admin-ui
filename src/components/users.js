import * as React from 'react';
import {List, Datagrid, TextField, Edit, SimpleForm, TextInput, PasswordInput, Create, AutocompleteInput} from 'react-admin';
import {ROLES} from "../constants";

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="userName"/>
            <TextField source="id"/>
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="userName"/>
            <PasswordInput source="password"/>
            <AutocompleteInput source="role" choices={ROLES}/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userName"/>
            <PasswordInput source="password"/>
            <AutocompleteInput source="role" choices={ROLES}/>
        </SimpleForm>
    </Create>
);

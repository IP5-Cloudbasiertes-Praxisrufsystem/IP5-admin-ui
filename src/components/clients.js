import * as React from 'react';
import {Datagrid, List, ReferenceField, TextField, Edit, SimpleForm, TextInput, PasswordInput} from 'react-admin';

export const ClientsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users"><TextField source="userName"/></ReferenceField>
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="userName"/>
            <PasswordInput source="password"/>
            <TextInput source="role"/>
        </SimpleForm>
    </Edit>
);

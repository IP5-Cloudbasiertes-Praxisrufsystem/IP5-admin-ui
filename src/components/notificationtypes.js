import * as React from 'react';
import {SelectField, List, Datagrid, TextField, Edit, SimpleForm, TextInput, PasswordInput, Create, AutocompleteInput} from 'react-admin';
import {ROLES} from "../constants";

export const NotificationTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="displayText"/>
            <TextField source="title"/>
            <TextField source="body"/>
            <TextField source="description"/>
        </Datagrid>
    </List>
);

export const NotificationTypeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="displayText"/>
            <TextInput source="title"/>
            <TextInput source="body"/>
            <TextInput source="description"/>
        </SimpleForm>
    </Edit>
);

export const NotificationTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="displayText"/>
            <TextInput source="title"/>
            <TextInput source="body"/>
            <TextInput source="description"/>
        </SimpleForm>
    </Create>
);

import * as React from 'react';
import {BooleanInput, List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, PasswordInput, Create, AutocompleteInput} from 'react-admin';

export const NotificationTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="displayText"/>
            <TextField source="title"/>
            <TextField source="body"/>
            <TextField source="description"/>
            <BooleanField source="textToSpeech"/>
        </Datagrid>
    </List>
);

export const NotificationTypeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Display Text" source="displayText"/>
            <TextInput source="title"/>
            <TextInput multiline={true} source="body"/>
            <TextInput source="description"/>
            <BooleanInput source="textToSpeech"/>
        </SimpleForm>
    </Edit>
);

export const NotificationTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="displayText"/>
            <TextInput source="title"/>
            <TextInput multiline={true} source="body"/>
            <TextInput source="description"/>
            <BooleanInput source="textToSpeech"/>
        </SimpleForm>
    </Create>
);

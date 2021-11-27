import * as React from 'react';
import {
    Datagrid,
    List,
    ReferenceField,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    PasswordInput,
    Create,
    AutocompleteInput,
    ReferenceInput,
    SelectInput
} from 'react-admin';
import {ROLES} from "../constants";

export const ClientsList = props => (
    <List {...props} sort={{field: "name", order: "DESC"}}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <ReferenceField source="userId" reference="users"><TextField source="userName"/></ReferenceField>
        </Datagrid>
    </List>
);

export const ClientEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="userName" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ClientCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="userName" /></ReferenceInput>
        </SimpleForm>
    </Create>
);

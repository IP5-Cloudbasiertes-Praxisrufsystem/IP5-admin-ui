import * as React from 'react';
import {List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const ClientsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users"><TextField source="userName" /></ReferenceField>
        </Datagrid>
    </List>
);
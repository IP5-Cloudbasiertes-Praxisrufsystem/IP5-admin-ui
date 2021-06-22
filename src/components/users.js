import * as React from 'react';
import {List, Datagrid, TextField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="userName"/>
            <TextField source="id"/>
        </Datagrid>
    </List>
);
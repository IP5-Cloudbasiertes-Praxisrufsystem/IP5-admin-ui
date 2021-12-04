import * as React from 'react';
import {
    ArrayField,
    ArrayInput,
    ChipField,
    Create,
    Datagrid,
    Edit,
    List,
    ReferenceField,
    ReferenceInput,
    ReferenceArrayField,
    SelectInput,
    SimpleForm,
    SimpleFormIterator,
    SingleFieldList,
    TextField,
    TextInput,
    AutocompleteInput,
    FormDataConsumer,
    FunctionField
} from "react-admin";

export const CallTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="displayText"/>
            <ReferenceField source="callGroup" reference="callgroups"><TextField source="name"/></ReferenceField>
        </Datagrid>
    </List>
);

export const CallTypeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="displayText"/>
          <ReferenceInput source="callGroup" reference="callgroups"><SelectInput optionText="name"/></ReferenceInput>
  </SimpleForm>
  </Edit>
);

export const CallTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="displayText"/>
            <ReferenceInput source="callGroup" reference="callgroups"><SelectInput optionText="name"/></ReferenceInput>
        </SimpleForm>
    </Create>
);


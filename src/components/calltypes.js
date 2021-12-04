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
            <TextField source="name"/>
            <ReferenceField reference="clients"><TextField optionText="name"/></ReferenceField>
        </Datagrid>
    </List>
);

export const CallTypeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="name"/>
          <ArrayInput source="participants">
              <SimpleFormIterator>
                  <ReferenceInput reference="clients"><SelectInput optionText="name"/></ReferenceInput>
              </SimpleFormIterator>
          </ArrayInput>
      </SimpleForm>
  </Edit>
);

export const CallTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <ReferenceInput reference="clients"><SelectInput optionText="name"/></ReferenceInput>
        </SimpleForm>
    </Create>
);


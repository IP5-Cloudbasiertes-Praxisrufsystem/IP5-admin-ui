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
            <ReferenceArrayField source="participants" reference="clients">
                <SingleFieldList>
                    <ChipField source="name"/>
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
);

export const CallTypeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="displayText"/>
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
            <TextInput source="displayText"/>
            <ArrayInput source="participants">
                <SimpleFormIterator>
                    <ReferenceInput reference="clients"><SelectInput optionText="name"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);


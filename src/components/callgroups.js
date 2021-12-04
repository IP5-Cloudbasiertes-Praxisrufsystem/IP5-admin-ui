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

export const CallGroupList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <ReferenceArrayField source="participants" reference="clients">
                <SingleFieldList>
                    <ChipField source="name"/>
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
);

export const CallGroupEdit = props => (
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

export const CallGroupCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <ArrayInput source="participants">
                <SimpleFormIterator>
                    <ReferenceInput reference="clients"><SelectInput optionText="name"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);


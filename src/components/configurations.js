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
    SelectInput,
    SimpleForm,
    SimpleFormIterator,
    SingleFieldList,
    TextField,
    TextInput,
    AutocompleteInput
} from "react-admin";
import {RULE_TYPES} from "../constants";

export const ConfigurationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="clientId" reference="clients"><TextField source="name"/></ReferenceField>
            <TextField source="name"/>
            <ArrayField source="ruleParameters">
                <Datagrid>
                    <TextField source="ruleType"/>
                    <TextField source="value"/>
                </Datagrid>
            </ArrayField>
            <ArrayField source="notificationTypes">
                <Datagrid>
                    <TextField source="type"/>
                    <TextField source="title"/>
                </Datagrid>
            </ArrayField>
        </Datagrid>
    </List>
);

export const ConfigurationEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="clientId" reference="clients"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="name"/>
            <ArrayInput source="ruleParameters"><SimpleFormIterator>
                <AutocompleteInput label="Rule Type" source="ruleType" choices={RULE_TYPES}/>
                <TextInput label="Value" source="value"/></SimpleFormIterator></ArrayInput>
            <ArrayInput source="notificationTypes"><SimpleFormIterator>
                <TextInput label={"Display Text"} source="displayText"/>
                <TextInput label={"Title"} source="title"/>
                <TextInput label={"Body"} source="body"/>
                <TextInput label={"Type"} source="type"/></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);

export const ConfigurationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="clientId" reference="clients"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="name"/>
            <ArrayInput source="ruleParameters"><SimpleFormIterator>
                <AutocompleteInput label="Rule Type" source="ruleType" choices={RULE_TYPES}/>
                <TextInput label="Value" source="value"/></SimpleFormIterator></ArrayInput>
            <ArrayInput source="notificationTypes"><SimpleFormIterator>
                <TextInput label={"Display Text"} source="displayText"/>
                <TextInput label={"Title"} source="title"/>
                <TextInput label={"Body"} source="body"/>
                <TextInput label={"Type"} source="type"/></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Create>
);

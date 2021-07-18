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
    AutocompleteInput,
    FormDataConsumer
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
            <ReferenceField source="notificationTypes" reference="notificationtypes"><TextField source="title"/></ReferenceField>
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
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "SENDER" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')} reference="clients" {...rest}><SelectInput optionText="name"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "NOTIFICATION_TYPE" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')} reference="notificationtypes" {...rest}><SelectInput optionText="title"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
            </SimpleFormIterator></ArrayInput>



            <ArrayInput source="notificationTypes">
                <SimpleFormIterator>
                    <ReferenceInput reference="notificationtypes"><SelectInput optionText="title"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const ConfigurationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="clientId" reference="clients"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="name"/>
            <ArrayInput source="ruleParameters"><SimpleFormIterator>
                <AutocompleteInput id="rule" label="Rule Type" source="ruleType" choices={RULE_TYPES}/>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "SENDER" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')} reference="clients" {...rest}><SelectInput optionText="name"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "NOTIFICATION_TYPE" &&
                        (
                            <TextInput label="Value" source={getSource('value')}/>
                        )
                    }
                </FormDataConsumer>
                </SimpleFormIterator></ArrayInput>
            <ArrayInput source="notificationTypes"><SimpleFormIterator>
                <TextInput label={"Display Text"} source="displayText"/>
                <TextInput label={"Title"} source="title"/>
                <TextInput label={"Body"} source="body"/>
                <TextInput label={"Type"} source="type"/></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Create>
);

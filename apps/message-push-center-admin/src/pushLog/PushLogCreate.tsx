import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MessageTitle } from "../message/MessageTitle";

export const PushLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="errorInfo" multiline source="errorInfo" />
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

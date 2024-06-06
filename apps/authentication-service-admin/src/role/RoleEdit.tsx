import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SystemUserTitle } from "../systemUser/SystemUserTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="roleName" source="roleName" />
        <ReferenceArrayInput
          source="systemUsers"
          reference="SystemUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SystemUserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

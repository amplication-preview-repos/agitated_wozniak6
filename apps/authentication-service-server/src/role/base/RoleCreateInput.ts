/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { SystemUserCreateNestedManyWithoutRolesInput } from "./SystemUserCreateNestedManyWithoutRolesInput";
import { Type } from "class-transformer";

@InputType()
class RoleCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  roleName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SystemUserCreateNestedManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => SystemUserCreateNestedManyWithoutRolesInput)
  @IsOptional()
  @Field(() => SystemUserCreateNestedManyWithoutRolesInput, {
    nullable: true,
  })
  systemUsers?: SystemUserCreateNestedManyWithoutRolesInput;
}

export { RoleCreateInput as RoleCreateInput };
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInfo } from './create-user-info.dto';

export class UpdateUserInfo extends PartialType(CreateUserInfo) {}

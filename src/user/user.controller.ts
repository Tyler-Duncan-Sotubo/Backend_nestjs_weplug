import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateProfilePhotoDto } from './dto';
import { UpdateUserInfo } from './dto/update-user-info.dto';
import { CreateUserInfo } from './dto/create-user-info.dto';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile-photo/:user_id')
  async getUserProfilePhoto(@Param('user_id') user_id: string) {
    return this.userService.getUserProfilePhoto(user_id);
  }

  @Put('profile-photo')
  async updateProfilePhoto(@Body() dto: UpdateProfilePhotoDto) {
    return this.userService.updateProfilePhoto(dto);
  }

  @Get('user-info/:user_id')
  async getUserInformation(@Param('user_id') user_id: string) {
    return this.userService.getUserInfo(user_id);
  }

  @Post('user-info')
  async createUserInformation(@Body() dto: CreateUserInfo) {
    return this.userService.createUserInfo(dto);
  }

  @Put('user-info')
  async updateUserInformation(@Body() dto: UpdateUserInfo) {
    return this.userService.updateUserInfo(dto);
  }
}

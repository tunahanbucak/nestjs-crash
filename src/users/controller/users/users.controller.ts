import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
    return [{ username: 'Tunahan', email: 'tunahan@mail.com' }];
  }

  // @Post('create')
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.body);
  //   response.send('Created');
  // }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  // @Get(':id/:postId')
  // getUserById(@Param('id') id: string, @Param('postId') postId: string) {
  //   console.log(id, postId);
  //   return { id, postId };
  // }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}

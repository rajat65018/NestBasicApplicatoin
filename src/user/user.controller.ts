import { Controller, Get, Post, Put, Request, Response } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  
  @Post()
  async createUser(@Request() req,@Response() res) {
    const payload = req.body;
    const data = await this.userService.createUser(payload);
    res.status(200).json({ message: data });
  }

  @Post('login')
  async login(@Request() req, @Response() res) {
    const payload = req.body;
    const data = await this.userService.login(payload);
    res.status(200).json({ message: data });
    }

  @Put()
  async updateUser(@Request() req, @Response() res) {
    const payload = req.body;
    const data = await this.userService.updateUser(payload);
    res.status(200).json({ message: data });
  }
  
}

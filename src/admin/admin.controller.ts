import { Controller, Post, Request, Response } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }
  @Post()
  async login(@Request() req, @Response() res) {
    
  }
}

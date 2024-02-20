import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('signIn')
    async signIn(@Request() req, @Response() res) {

        const payload = req.body;
        const userData = await this.authService.signIn(payload);
        res.status(200).json({ message: userData });
    }

    @UseGuards(AuthGuard)
    @Get()
    async simplePrint(@Request() req,@Response() res) {
        res.status(200).json({ message: 'hip hip operation successfully' });
    }
}

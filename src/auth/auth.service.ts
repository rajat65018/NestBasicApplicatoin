import { Dependencies, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Dependencies(UserService, JwtService)
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
    private  jwtService:JwtService) { }
    async signIn(payload) {
        const searchQuery = {
            email: payload.email
        };
        const userData = await this.userService.findOneUser(searchQuery);
        const userId = { _id: userData._id };
        const token = await this.jwtService.signAsync(userId);
        return token;
    }
}

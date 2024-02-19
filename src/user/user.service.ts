import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
     createUser(payload) {
         return 'User created successfully';
    }

    login(payload) {
        return 'user login successfull';
    }

    updateUser(payload) {
        return 'Data updated successfully';
    }


}

import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    console.log('test AuthService function');
  }

  signup() {
    return { msg: 'Hello,I have signed up' };
  }

  signin() {
    return 'I am sign in, felix';
  }
}

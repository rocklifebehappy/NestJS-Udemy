import { Get, Controller } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/route')
  getRootRoute() {
    return 'Hello World';
  }
}

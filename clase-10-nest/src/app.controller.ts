import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //POST-> localhost:3000/a/b/c
  @Post('a/b/c')
  crearAlgo(): string {
    return 'algo'
  }
}

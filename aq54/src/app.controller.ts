import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data1')
  async getCurrentData1() {
    return this.appService.getCurrentValues1();
  }

  @Get('data2')
  async getCurrentData2() {
    return this.appService.getCurrentValues2();
  }

  @Get('data3')
  async getSession() {
    return this.appService.getSessionInfo();
  }
}

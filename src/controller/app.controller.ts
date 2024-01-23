import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  getPing(): string {
    return this.appService.getPing();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { Public } from '../module/decorator/public-access.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get('/ping')
  getPing(): string {
    return this.appService.getPing();
  }
}

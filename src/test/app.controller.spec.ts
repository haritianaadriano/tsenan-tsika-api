import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "pong"', () => {
      expect(appController.getPing()).toBe('pong');
    });
  });
});

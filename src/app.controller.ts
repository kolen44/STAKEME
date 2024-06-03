import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/transactions/:hash')
  async getTransactionByHash(@Param('hash') hash: string): Promise<any> {
    return await this.appService.getTransactionByHash(hash);
  }

  @Get('/block/:height')
  async getInfoAboutBlock(@Param('height') height: number): Promise<any> {
    return await this.appService.getInfoAboutBlock(height);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GatewayModule } from './gateway/gateway.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [GatewayModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

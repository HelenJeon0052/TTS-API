import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';

import { GatewayApp } from './gateway';

@Module({
  providers: [GatewayApp, GatewayService],
  controllers: [GatewayController],
})
export class GatewayModule {}

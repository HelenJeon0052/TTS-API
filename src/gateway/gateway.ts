import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Server } from 'socket.io'


@WebSocketGateway()
export class GatewayApp {
    private server: Server;

    @SubscribeMessage('message')
    async onNewMessage(@MessageBody() body: string) {
        console.log(body)
    }

}
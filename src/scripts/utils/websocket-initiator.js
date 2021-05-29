import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this.onMessageHandler;
  },

  onMessageHandler(message) {
    const resto = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${resto.name} is on cinema!`,
      options: {
        body: resto.description,
        image: `${CONFIG.BASE_IMAGE_URL}${resto.productId}`,
      },
    });
  },
};

export default WebSocketInitiator;

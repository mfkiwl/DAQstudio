import yaml
import redis
from django.conf import settings
from channels.generic.websocket import WebsocketConsumer
import uuid
import json
from asgiref.sync import async_to_sync

# Connect to our Redis instance
redis_instance = redis.StrictRedis(host=settings.REDIS_HOST,
                                   port=settings.REDIS_PORT, db=0, decode_responses=True)

STATUS_CODES = yaml.load(open('STATUS_CODES.yml', 'r'), Loader=yaml.Loader)
lastSysStatus = ""


class FlojoyConsumer(WebsocketConsumer):
    socketId = ''

    def connect(self):
        self.accept()
        self.room_group_name = 'flojoy'
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        id = uuid.uuid1().__str__()
        while redis_instance.get(id) is not None:
            id = uuid.uuid1().__str__()
        self.socketId = id
        self.send(json.dumps({
            'type': 'connection_established',
            'msg': 'You are now connected to flojoy servers',
            'socketId': self.socketId
        }))
        redis_instance.set(self.socketId, json.dumps(
            {'SYSTEM_STATUS': STATUS_CODES['STANDBY']}))

    def send_message(self, text):
        self.send(text)
        return

    def worker_response(self, event):
        if(event['jobsetId'] == self.socketId):
            self.send(json.dumps(event))

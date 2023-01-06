from celery import Celery
import io
from PIL import Image
import base64

BACKEND = 'redis://redis:6379/0'
BROKER = 'amqp://guest:guest@rabbitmq:5672/'

app = Celery('resizer', backend=BACKEND, broker=BROKER)

WIDTH = 384
HEIGHT = 384


@app.task
def resize(encoded_img):
    raw_img = Image.open(io.BytesIO(base64.b64decode(encoded_img)))

    resized_img = raw_img.resize((WIDTH, HEIGHT))
    buffer = io.BytesIO()
    resized_img.save(buffer, format=raw_img.format)

    decoded_img_string = base64.b64encode(buffer.getvalue()).decode('ascii')

    return decoded_img_string

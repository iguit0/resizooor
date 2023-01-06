from fastapi import FastAPI, UploadFile, File, HTTPException, Response
from http import HTTPStatus
import imghdr
import base64
from resizor import resize

app = FastAPI()

VALID_IMAGE_FORMATS = ['jpeg', 'jpg', 'png']


@app.post('/images/resize')
async def resize_img(image_file: UploadFile = File(...)):
    # checking if file extension is correct
    image_file_extension = imghdr.what(image_file.file)
    if image_file_extension not in VALID_IMAGE_FORMATS:
        raise HTTPException(status_code=HTTPStatus.BAD_REQUEST,
                            detail="Provide a valid image. Extensions accepted: .jpeg, .jpg and .png")

    # read file, encode and send to resizor task to resize the image
    image_file_content = await image_file.read()
    image_file_encoded = base64.b64encode(image_file_content).decode('ascii')

    # resizor_task will proccess, resize the image and return in bytes
    resizor_task_result = resize.delay(image_file_encoded).get()
    image_bytes = base64.b64decode(resizor_task_result)

    # response should maintain the original extension
    return Response(content=image_bytes, media_type=f'image/{image_file_extension}')

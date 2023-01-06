import base64
from PIL import Image
import io
from resizor import resize

EXPECTED_DIMENSION_IN_PX = 384


def test_result_image_should_have_correct_dimensions():
    with open('color_bars.png', 'rb') as image_file:
        image_in_string = base64.b64encode(image_file.read())
        resized_image = resize(image_in_string)
        image_pillow = Image.open(io.BytesIO(base64.b64decode(resized_image)))

        assert image_pillow.width == EXPECTED_DIMENSION_IN_PX
        assert image_pillow.height == EXPECTED_DIMENSION_IN_PX
        assert image_pillow.format == "PNG"

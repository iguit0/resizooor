<h1 align="center">
   :straight_ruler: Resizooor :straight_ruler:
</h1>

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tech">Tech</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-get-started">Get Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://drive.google.com/file/d/13LbgMFnuUhzWWnspFRKne866xI6gSGXK/view?usp=share_link">Demo</a>&nbsp;&nbsp;&nbsp;
</p>

<br/>

## :computer: Project
An REST API that receives an image and uses a queuing system to change its size to 384x384.

<br/>

## :rocket: Tech

- [Docker](https://docs.docker.com/get-docker/)
  - [Docker-compose](https://docs.docker.com/engine/reference/commandline/compose/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Celery](https://docs.celeryq.dev/en/stable/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Redis](https://redis.io/)
- [Pytest](https://docs.pytest.org/en/7.2.x/)


### :gear: Get Started


```bash
    git clone https://github.com/iguit0/resizooor.git

    cd resizooor
    
    docker-compose up
```

Using [Postman](https://www.postman.com/):
    
-  Set up a POST request with the following URL: http://127.0.0.1:8000/images/resize
   - Body: `form-data`
     - Key: `image_file`
     - After that, select `color_bars.png` (example image to test the solution)
- After send the request, the result will appear as body result and after that just save response which is going to be a file.

:video_camera: Watch [demo video](https://drive.google.com/file/d/13LbgMFnuUhzWWnspFRKne866xI6gSGXK/view?usp=share_link).
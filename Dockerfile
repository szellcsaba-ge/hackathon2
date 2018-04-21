FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
COPY . /app
#RUN pip install -r "/app/requirements.txt"
#ENTRYPOINT ["python"]
#CMD ["/app/backend/main.py"]

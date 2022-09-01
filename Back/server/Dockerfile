FROM python:3.8-slim-buster
WORKDIR /server

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY main.py main.py

EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["main.py"]
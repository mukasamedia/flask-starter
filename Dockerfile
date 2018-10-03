FROM python:3.6-alpine

LABEL maintainer="Mukasa Patrick <mukasamedia@gmail.com>"


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

CMD [ "gunincorn", "-b", "0.0.0.0:8000", "--access-logfile -", "core.app:create_app()" ]
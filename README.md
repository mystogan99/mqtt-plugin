# Grafana-mqtt-plugin
Send data over to flask server then to mqtt broker and vice-versa.

## Setup
- Install requirements by typing this:

```
foo@bar:~$ cd /var/lib/grafana/plugins/
```
- git clone repo
- Activate Virtual Environment
```
foo@bar:~$ sudo source ./flask_server/flask/bin/activate
```
- Start the server
```
foo@bar:~$ cd flask_server
```
```
foo@bar:~$ python main.py
```

## Install

```
foo@bar:~$ cd Grafana-mqtt-plugin/React_plugin
foo@bar:~$ sudo yarn install / sudo npm install
foo@bar:~$ sudo yarn build / sudo npm build
foo@bar:~$ sudo systemctl restart grafana-server.service
```
- Go to http://localhost:3000

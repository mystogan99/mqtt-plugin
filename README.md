# Grafana-mqtt-plugin
Send data over to flask server then to mqtt broker and vice-versa.

## Setup
- Activate Virtual Environment
```
foo@bar:~$ source ./flask_server/flask/bin/activate
```
- Start the server
```
foo@bar:~$ cd flask_server
```
```
foo@bar:~$ python main.py
```

## Install

- Install requirements by typing this:

```
foo@bar:~$ cd /var/lib/grafana/plugins/
```
- git clone repo

```
foo@bar:~$ cd Grafana-mqtt-plugin
foo@bar:~$ cd react_plugin
foo@bar:~$ sudo yarn install
foo@bar:~$ sudo yarn build
foo@bar:~$ sudo systemctl restart grafana-server.service
```
- Go to http://localhost:3000

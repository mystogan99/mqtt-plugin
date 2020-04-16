# Grafana-mqtt-plugin
## Setup
- Activate Virtual Environment
```
foo@bar:~$ source ./flask_server/flask/bin/activate
```

## Install

- Install requirements by typing this:
```
foo@bar:~$ cd /var/lib/grafana/plugins/
```
```
foo@bar:~$ git clone repo
```
```
foo@bar:~$ sudo yarn install
```
```
foo@bar:~$ sudo yarn build
```
```
foo@bar:~$ sudo systemctl restart grafana-server.service
```
```
foo@bar:~$ cd flask_server
```
```
foo@bar:~$ python main.py
```

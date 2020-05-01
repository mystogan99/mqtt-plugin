# Grafana-mqtt-plugin
Send data over to flask server then to mqtt broker and vice-versa.

- git clone repo

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


```
foo@bar:~$ cd Grafana-mqtt-plugin/React_plugin
foo@bar:~$ sudo yarn install
foo@bar:~$ sudo yarn build
foo@bar:~$ sudo systemctl restart grafana-server.service
```
- Go to http://localhost:3000

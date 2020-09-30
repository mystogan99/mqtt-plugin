# mqtt-plugin
A plugin for Grafana to send data over to flask server then to mqtt broker and vice-versa.

## Setup
- Run flask server to send all commands directly to flask.


## Install

```console
foo@bar:~$ cd Grafana-mqtt-plugin/React_plugin
```
```console
foo@bar:~$ sudo yarn install / sudo npm install
```
```console
foo@bar:~$ sudo yarn build / sudo npm build
 ```
```console
foo@bar:~$ sudo systemctl restart grafana-server.service
```
- Go to http://localhost:3000

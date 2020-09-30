# mqtt-plugin
A plugin for Grafana to send data over to flask server then to mqtt broker and vice-versa.
The react plugin hits the flask server(http request with AXIOS) with state of the device and the server sends the data to mqtt broker. Using flask server is optional you can specify any end point to send the data.

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
foo@bar:~$ sudo yarn build / sudo npm run build
 ```
```console
foo@bar:~$ sudo systemctl restart grafana-server.service
```
- Go to http://localhost:3000

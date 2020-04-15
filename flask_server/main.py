import flask
from flask import jsonify,request, url_for, render_template
from flask_cors import CORS
import paho.mqtt.client as mqtt

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

client = mqtt.Client()

books = [
    {'id' : 'hello World'}
]
@app.route('/', methods=['GET'])
def home():
    return "<h1>Api testing..</h1>"

@app.route('/api/', methods=['GET'])
def api():
    return jsonify(books)

@app.route('/post/', methods=['POST'])
def post():
    data = request.get_json()
    # payload=  data['text']
    client.connect("localhost",1883,60)
    weed = data['text']
    print(weed)
    if data['text'] == 'on':
        client.publish(topic="/test", payload="Switch on the node", retain=True)
    else:
        client.publish(topic="/test", payload="Switch off the node", retain=True)
 
    client.disconnect()
 
    return "ok"

app.run()
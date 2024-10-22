import json
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/get_prognosis', methods = ['GET'])

def get_prognosis():
    
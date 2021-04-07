from flask import Flask, render_template, jsonify, request
import json
import requests

app = Flask(__name__)

SERVER_API_BASE = 'http://127.0.0.1:8000/'

@app.route('/')
def hello_world():
    return render_template("juststreamit.html")

# @app.route('/v1/movie/', methods=['GET'])
# def retrieve_movie_title():
#     if 'genre' in request.args:
#         genre = str(request.args['genre'])
#     else:
#         return "Error: No genre field provided. Please specify an genre."
#
#     url = SERVER_API_BASE + 'api/v1/titles/?&genre={}'.format(genre)
#     response = requests.get(url)
#
#     if response.status_code != 200:
#         return jsonify({
#                 'status' : 'error',
#                 'message' : 'La requête de recuperation à échoué {}'.format(response['message'])
#         }),500
#
#     content = response.json()['results']
#     return jsonify(content)


if __name__ == '__main__':
    app.run(debug=True)

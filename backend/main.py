from flask import Flask, session, redirect, request, jsonify
import backend.settings as settings

app = Flask(__name__)


@app.route('/')
def index():
    get_data = 'test'
    return jsonify(app=get_data)


@app.errorhandler(404)
def page_not_found(error):
    return jsonify(app=error), 404


if __name__ == '__main__':
    app.run(debug=settings.DEV_STATUS)

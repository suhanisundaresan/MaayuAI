from flask import Blueprint, jsonify, request

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from MaayuAI Flask API!"})
from flask import Flask
from flask_cors import CORS
from routes.api import api_blueprint

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(api_blueprint, url_prefix='/api')

@app.route('/')
def health_check():
    return {'status': 'MaayuAI Backend is running'}

if __name__ == '__main__':
    app.run(debug=True)

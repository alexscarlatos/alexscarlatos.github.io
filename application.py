from flask import Flask
application = Flask(__name__,
            static_url_path='',
            static_folder='web/static',
            template_folder='web/templates')

@application.route('/')
def hello_world():
    return 'Hello, World!'

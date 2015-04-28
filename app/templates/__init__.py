from flask import Flask



def bootstrap_app():
    """
    Simple bootstrap function that intialises the app and any config
    """
    app = Flask(__name__)

    from .web import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
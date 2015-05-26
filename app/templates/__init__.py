from flask import Flask



def bootstrap_app():
    """
    Simple bootstrap function that intialises the app and any config
    """
    app = Flask(__name__)

    from .web import main as main_blueprint
    app.register_blueprint(main_blueprint)

    @app.template_filter('angular')
    def curly(value):
        """
        This filter allows us to instruct Jinja to ignore any text within curlies in the format {{ foo | angular }}
        so that it is evaluated by Angular instead
        Cribbed from this stackoverflow question:
        http://stackoverflow.com/questions/5117204/avoiding-ambiguous-mustaches-from-jinja2-that-includes-jquery-templates
        """

        # Handle value as string  {{'foo'|angular}}
        if (isinstance(value, str)):
            return_value = value
        # Handle value directly. {{foo|angular}}
        else:
            return_value = value._undefined_name
        return "{{" + return_value + "}}"

    return app

from notebook.utils import url_path_join
from notebook.base.handlers import IPythonHandler

#from .pizza_utils import PizzaDeliveryHandler


def _jupyter_server_extension_paths():
    return [{
        "module": "pizzabutton"
    }]


def _jupyter_nbextension_paths():
    """Required to load JS button"""
    return [dict(
        section="notebook",
        src="static",
        dest="pizzabutton",
        require="pizzabutton/index")]


class PizzaDeliveryHandler(IPythonHandler):

    def get(self):
        # order_pie()
        self.finish("Pizza on the way!")


def load_jupyter_server_extension(nb_server_app):
    web_app = nb_server_app.web_app
    host_pattern = '.*$'
    #print("host pattern: ", host_pattern)
    #print("base_url is None: ", web_app.settings['base_url'] is None)
    #print("url_path", url_path_join(web_app.settings['base_url'], '/pizza_me'))
    #import inspect; print(inspect.getabsfile(type(web_app)))
    web_app.add_handlers(host_pattern, [
        (url_path_join(web_app.settings['base_url'], r'/pizza_me'),
         PizzaDeliveryHandler)
    ])
    #import pdb; pdb.set_trace()
    # web_app.log.info("PizzaDeliveryHandler enabled")



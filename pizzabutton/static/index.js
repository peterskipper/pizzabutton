define([
    'base/js/namespace',
    'jquery',
    'base/js/utils',
    'base/js/dialog'
], function(Jupyter, $, utils, dialog) {

    function get_pizza_req() {
	console.log("Sending get req for pizza")
	var pizzaUrl = utils.url_path_join(utils.get_body_data('baseUrl'), 'pizza_me')
	console.log("Pizza url: ", pizzaUrl)
	$.getJSON(pizzaUrl, function(data) {
	    console.log("Data: ", data)
	    dialog.modal(data)
	})
    }

    function place_button() {
	if (!Jupyter.toolbar) {
	    $([Jupyter.events]).on("app_initialized.NotebookApp", place_button);
	    return;
	}
	Jupyter.toolbar.add_buttons_group([{
	    label: 'Pizza Button',
	    icon: 'fa-car',
	    callback: get_pizza_req
	}])
    }

    function load_ipython_extension() {
	place_button();
    }

    return {
	load_ipython_extension: load_ipython_extension
    };

});

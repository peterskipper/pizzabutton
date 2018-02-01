define([
    'base/js/namespace',
    'jquery'
], function(Jupyter, $) {
    
    function post_pizza_req() {
	console.log("Sending post req for pizza")
	var url = window.location.href
	console.log("Base url: ", url)
	var pizza_url = url + "/pizza_me"
	console.log("Pizza url: ", pizza_url)
	$.get(pizza_url)
    }

    function place_button() {
	if (!Jupyter.toolbar) {
	    $([Jupyter.events]).on("app_initialized.NotebookApp", place_button);
	    return;
	}
	Jupyter.toolbar.add_buttons_group([{
	    label: 'Pizza Button',
	    icon: 'fa-car',
	    callback: post_pizza_req
	}])
    }

    function load_ipython_extension() {
	place_button();
    }

    return {
	load_ipython_extension: load_ipython_extension
    };

});

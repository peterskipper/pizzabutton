# pizzabutton
Put a Pizza in your Jupyter Notebook

## Dependencies
In order to actually order a pizza from your Jupyter notebook, you'll need
to define a set of bash environment variables like your address. DO NOT 
GIT COMMIT ANY OF YOUR PRIVATE INFORMATION.

Start by making your own copy of the PIZZAVARS file, `cp EXAMPLE_PIZZAVARS PIZZAVARS`. Edit the file to contain your correct information. Then at the terminal `source PIZZAVARS` to put those variables into your environment. To change your favorite order, see the section below, Define Your Order.

## Installation
It's highly recommended that you install in a virtualenv. The following commands assume you have already done `source activate my-env-name`. After doing so, install both the serverextension and the toolbar button (nbextension) with:

```bash
pip install pizzabutton
jupyter serverextension enable --py pizzabutton --sys-prefix
jupyter nbextension install --py pizzabutton --sys-prefix
jupyter nbextension enable --py pizzabutton --sys-prefix
```

You can check that the install was successful with:
```bash
jupyter nbextension list
jupyter serverextension list
```

## Define Your Order
Use the pizzapi module to search for menu items at your local store.
```python
import pizzapi
my_address = pizzapi.Address('700 Pennsylvania Avenue NW',
			  'Washington',
			  'DC',
			  '20408')
store = my_address.closest_store()
menu = store.get_menu()
menu.search(Name='Pepperoni') # 'Name' NOT 'name', 'Pepperoni' NOT 'pepperoni'
```
Should give you output like this:
```
10SCPFEAST Small (10") Hand Tossed Ultimate Pepperoni $11.99 10 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
10TPFEAST Small (10") Thin Ultimate Pepperoni $11.99 10 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
12SCPFEAST Medium (12") Hand Tossed Ultimate Pepperoni $14.99 12 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
12TPFEAST Medium (12") Thin Ultimate Pepperoni $14.99 12 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
PBKIREPX Large (14") Brooklyn Ultimate Pepperoni $17.49 14 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
14SCPFEAST Large (14") Hand Tossed Ultimate Pepperoni $17.49 14 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
14TPFEAST Large (14") Thin Ultimate Pepperoni $17.49 14 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
P16IBKPX X-Large (16") Brooklyn Ultimate Pepperoni $19.99 16 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
P10IGFPX Small (10") Gluten Free Crust Ultimate Pepperoni $11.99 10 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
P12IPAPX Medium (12") Handmade Pan Ultimate Pepperoni $14.99 12 S_PIZPX {'X': '1', 'C': '1', 'P': '1.5', 'Cs': '1', 'Cp': '1'}
```
To order, e.g., the Small Hand Tossed Ultimate Pepperoni pizza, set MY_ORDER_ITEMS=10SCPFEAST in your PIZZAVARS file. To order more than 1 item, list all the desired items in a comma-separated list (i.e. MY_ORDER_ITEMS=10SCPFEAST,20BCOKE)

## Usage
If you followed the instructions in Dependencies and Installation and the extensions are listed, you should be good to go! Just start your notebook as per usual:
```bash
jupyter notebook My_Notebook.ipynb
```
A new button will appear on your toolbar that looks like this:  
![pizza button](https://github.com/peterskipper/pizzabutton/raw/master/images/button.png "Pizza Delivery Button")


Click the button once and a modal will pop up telling you your order is on the way! Keep on coding & eating friend...

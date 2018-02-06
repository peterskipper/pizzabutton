from setuptools import setup, find_packages

try:
    long_desc = open('README.md').read()
except:
    long_desc = ''

setup(
    name="pizzabutton",
    url="https://github.com/peterskipper/pizzabutton",
    author="Peter Skipper",
    author_email="peter.skipper@gmail.com",
    version="0.0.1",
    packages=find_packages(),
    description="A button on Jupyter's toolbar for pizza",
    long_description=long_desc,
)

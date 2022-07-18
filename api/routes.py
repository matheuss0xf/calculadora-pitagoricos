from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


from calculator import calculatePitagoras

app = Flask("__name__")
cors = CORS(app, resources={r"/*": {"origens": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def welcome():
    welcome = """
        <h1>Api pitagoricos </h1>
        <p> Como utilizar ? É muito simples</p>
        <p> basta passar os parâmetros no lugar do cateto: https://api-calculadora-pitagoricos.herokuapp.com/hipotenusa/cateto&cateto
        <h2>Exemplo</h2>
        <p>https://api-calculadora-pitagoricos.herokuapp.com/hipotenusa/3&4</p>
    """
    return welcome


@app.route("/hipotenusa/<int:cateto1>&<int:cateto2>", methods=["GET"])
@cross_origin()
def calculateHipotenusa(cateto1, cateto2):
    hipotenusa = calculatePitagoras(cateto1, cateto2)
    return jsonify(hipotenusa)

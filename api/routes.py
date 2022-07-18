from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


from calculadora import calcularPitagoras

app = Flask("__name__")
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/calculadora/<int:cateto1>&<int:cateto2>", methods=["GET"])
@cross_origin()
def calculadora(cateto1, cateto2):
    hipotenusa = calcularPitagoras(cateto1, cateto2)
    return jsonify(hipotenusa)

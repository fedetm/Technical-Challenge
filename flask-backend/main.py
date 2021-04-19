from flask import Flask, render_template, request, redirect
from flask_bootstrap import Bootstrap
from py2neo import Graph, Node, Relationship
from neomodel import StructuredNode, StringProperty, RelationshipTo, RelationshipFrom, config


config.DATABASE_URL = 'bolt://neo4j:admin@localhost:11013'

class User(StructuredNode):
    name = StringProperty(unique_index=True)
    order = RelationshipTo('Order', 'ORDER')

    def orders():
        return order

class Order(StructuredNode):
    name = StringProperty(unique_index=True)
    user = StringProperty(unique_index=True)
    producto = RelationshipFrom('Product', 'PRODUCT')

class Product(StructuredNode):
    name = StringProperty(unique_index=True)
    order = RelationshipFrom('Order', 'ORDER')

def agregarInformacionBd(user, order, product):
    
    try:
        usuario = User.nodes.get(name=user)
    except Exception:
        usuario = User(name=user).save()

    try:
        orden = Order.nodes.get(name=order)
        if usuario.order.is_connected(orden):
            print("Orden encontrada!")
        else:
            orden = Order(name=order).save()
            usuario.order.connect(orden)
    except Exception:
        orden = Order(name=order).save()
        usuario.order.connect(orden)
    
    try:
        libro = Product.nodes.get(name=product)
    except Exception:
        libro = Product(name=product).save()
    
    orden.producto.connect(libro)
    libro.order.connect(orden)

app = Flask(__name__)
Bootstrap(app)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        req = request.json
        agregarInformacionBd(req["user"], req["order"], req["product"])
        return redirect("http://127.0.0.1:5000/"+req["user"], code=302)
    
    if request.method == 'GET':
        return render_template('index.html')

@app.route('/<name>', methods=['POST', 'GET'])
def usuario(name=None):
    if request.method == 'GET':
        user = User.nodes.get(name=name)
        orders = []
        for order in Order.nodes.all():
            if user.order.is_connected(order):
                orders.append(order.name)

        products = []
        for order in Order.nodes.all():
            if user.order.is_connected(order):
                for product in Product.nodes.all():
                    if product.order.is_connected(order):
                        products.append(product.name)
    
    return render_template("users.html", name=name, user=user, orders=orders, products=products)

@app.route('/recomend/<name>', methods=['POST', 'GET'])
def recomend(name=None):
    if request.method == 'GET':
        user = User.nodes.get(name=name)
        orders = []        
        for order in Order.nodes.all():
            if user.order.is_connected(order):
                orders.append(order)
        
        products = []
        for order in Order.nodes.all():
            if user.order.is_connected(order):
                for product in Product.nodes.all():
                    if product.order.is_connected(order):
                        products.append(product)
        
        relProducts = []
        for orderUser in orders:
            for order in Order.nodes.all():
                if orderUser.name == order.name:
                    for product in Product.nodes.all():
                        if product.order.is_connected(order):
                            relProducts.append(product)
        
        for prod in products:
            for p in relProducts:
                if p.name == prod.name:
                    relProducts.remove(p)

        recomProducts = []
        for p in relProducts:
            recomProducts.append(p.name)

    return render_template("recomend.html", name=name, user=user, products=recomProducts)

if __name__ == "__main__":
    app.run(debug=True)
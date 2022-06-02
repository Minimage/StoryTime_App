from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Account, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from argon2 import PasswordHasher


ph = PasswordHasher()
api = Blueprint('api', __name__)


#____________________________________________________________________________________________________

@api.route('/register', methods=['POST'])
def register():
    payload = request.get_json()
    print(ph.hash(payload['password']))

    user = User(
        email=payload['email'],
        password=ph.hash(payload['password']),
        is_active=True
    )

    db.session.add(user)
    db.session.commit()

    return "user registered", 200

#_______________________________________________________
# Working on this code

@api.route('/user', methods=['POST', 'GET', 'DELETE'])
def user():
    
    response_body = {
        "message": "user"
    }

    return jsonify(response_body), 200

#____________________________________________________________________________________________________

@api.route('/login', methods=['POST'])
def login():
    payload = request.get_json()

    user = User.query.filter(User.email == payload['email']).first()
    if user is None:
        return 'failed-auth', 401

    try:
        ph.verify(user.password, payload['password'])

    except:1
    return 'failed-auth', 401

    token = create_access_token(identity=user.id)

    return jsonify({'token': token})



#____________________________________________________________________________________________________

@ api.route('/account', methods=['GET'])
@ jwt_required()
def accounts():
    user_id = get_jwt_identity()

    user = User.query.get(user_id)
    accounts = Account.query.filter(Account.user_id == user_id).all()

    account_info = {
        "account": [x.serialize() for x in accounts],
        "user": user.serialize()
    }

    return jsonify(account_info)


#____________________________________________________________________________________________________


@api.route('/account/<int:id>', methods=['DELETE'])
def del_account(id):
    account_data = Account.query.filter_by(id=id).delete()
    db.session.commit()

    return 'Account deleted', 204


#____________________________________________________________________________________________________


@api.route('/favorites', methods=['GET'])
def favorites():

    favorites_data = Favorites.query.all()
    response_body = [favorites.serialize() for favorite in favorites_data]
    return jsonify(response_body), 200


@api.route('/favorites/<int:id>', methods=['DELETE'])
def del_favorites(id):
    favorites_data = Favorites.query.filter_by(id=id).delete()
    db.session.commit()

    return 'Favorites deleted', 204

#____________________________________________________________________________________________________

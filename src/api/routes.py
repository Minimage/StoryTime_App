from flask import Flask, request, jsonify, url_for, Blueprint, flash
from api.models import db, User, Account, Favorites, Lesson1_vocab, Lesson
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
        username = payload['username'],
        first_name = payload['first_name'],
        last_name = payload['last_name'],
        is_active=True
    )

    db.session.add(user)
    db.session.commit()

    # return "user registered", 200
    return jsonify(user.serialize()), 200


#_______________________________________________________
# Working on this code

@api.route('/user', methods=['POST', 'GET', 'DELETE'])
@jwt_required()
def user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    
    response_body = {
        "message": "user"
    }

    return jsonify(response_body), 200

#____________________________________________________________________________________________________

# @api.route('/login', methods=['POST'])
# def login():
#     payload = request.get_json()

#     user = User.query.filter(User.email == payload['email']).first()
#     if user is None:
#         return 'failed-auth', 401

#     try:
#         ph.verify(user.password, payload['password'])

#     except:1
#     return 'failed-auth', 401

#     token = create_access_token(identity=user.id)

#     return jsonify({'token': token})


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    user = get_jwt_identity()
    search = User.query.filter_by(username=user).first()
    return jsonify({"user":search.username})
    

@api.route("/login", methods=["POST"])
def create_token():
    # body = request.get_json()
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(username=username).one_or_none()
    if user:
        if user.checkpassword(password):
            access_token = create_access_token(identity=username)
            return jsonify({"access_token":access_token})
    
    # tuple
    return jsonify(msg='failed'),400
    


#____________________________________________________________________________________________________

@ api.route('/account', methods=['GET'])
@ jwt_required()
def accounts():
    user_id = get_jwt_identity()
    current_user_id = get_jwt_identity()

    user = User.query.get(user_id)
    accounts = Account.query.filter(Account.user_id == user_id).all()

    account_info = {
        "account": [x.serialize() for x in accounts],
        "user": user.serialize(),
        "id": user_id.serialize()
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
# @api.route('/words')
@api.route('/lesson1_vocab', methods=['POST'])
def words():
    payload = request.get_json()
    for item in payload:
        instance = Lesson1_vocab(word = item["word"], phonetic = item["phonetic"], mandarin = item["mandarin"], phoneticM = item["phoneticM"], images = item["images"], part_of_speech = item["part_of_speech"])
        
        db.session.add(instance)
        db.session.commit() 
      
    return "Success the words have been added", 200

#____________________________________________________________________________________________________

# @api.route('/forwarded_resp', methods=['GET'])
# def forward_resp():
#     resp = requests.get(
#         'https://httpbin.org/get'
#     ).json()
#     return jsonify(resp)

# @api.route('/forwarded_resp/<string:word>', methods=['GET'])
# def accepting_args(word):
#     resp = requests.get(
#         'https://httpbin.org/base64/{}'.format(word)
#     ).text
#     print(resp)
#     return jsonify(resp)
#_________________________________________________________________________

@api.route("/lesson1_vocab/<int:id>")
def get_lesson1_vocab(id):
    lesson1_vocab = Lesson1_vocab.query.filter_by(id=id).one_or_none()
    return jsonify(lesson.serialize()), 200



@api.route("/lesson")
def get_lesson():
    # lesson = Lesson1_vocab.query.filter_by(id=id).one_or_none()
    return jsonify(lesson.serialize()), 200

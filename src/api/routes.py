from flask import Flask, request, jsonify, url_for, Blueprint, flash
from api.models import db, User, Account, Favorites, Lesson1_vocab, Lesson, Questions, Options, Lesson_Para
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from argon2 import PasswordHasher
import sendgrid
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail,Email,From,To,Content
from dotenv import load_dotenv
import os


load_dotenv()

ph = PasswordHasher()
api = Blueprint('api', __name__)


#____________________________________________________________________________________________________

@api.route('/reset_password', methods=['GET', 'POST'])
def reset_password():
    payload = request.get_json()
    user = User.query.filter_by(email=payload["email"]).one_or_none()
    if user.email == 'seancampbell914@gmail.com':
        sg = sendgrid.SendGridAPIClient(api_key = os.getenv('SENDGRID_API_KEY'))
        from_email = Email('seancampbell914@gmail.com')
        to_email = To('seancampbell914@gmail.com')
        content = Content("text/plain", "and easy to do anywhere, even with Python")
        myMail = Mail(from_email, to_email,'', content)

        sg.send(myMail)
        print(myMail)
        response_body = {
            "message": 'response.serialize()'
            }

    return jsonify(response_body), 200
    return 'Sucess'

    if user:
        message = Mail(
            from_email='seancampbell914@gmail.com',
            to_emails=user.email,
            subject='Sending with Twilio SendGrid is Fun',
            html_content=("<strong>and easy to do anywhere, even with Python</strong>"))
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e)

        return jsonify({})


@api.route('/register', methods=['POST'])
def register():
    payload = request.get_json()
    print(ph.hash(payload['password']))

    user = User(
        email=payload['email'],
        password=payload['password'],
        username = payload['username'],
        first_name = payload['first_name'],
        last_name = payload['last_name'],
        is_active=True
    )

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 200


@api.route('/user', methods=['POST', 'GET', 'DELETE'])
@jwt_required()
def user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(username=user_id).first()
    
    response_body = {
        "first_name": user.first_name,
        "last_name": user.last_name,
        "username": user.username,
    }

    return jsonify(response_body), 200

#____________________________________________________________________________________________________

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    user = get_jwt_identity()
    search = User.query.filter_by(username=user).first()
    return jsonify({"user":search.username})
    

@api.route("/login", methods=["POST","GET"])
def create_token():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(username=username).one_or_none()
    if user:
        if user.checkpassword(password):
            access_token = create_access_token(identity=username)
            return jsonify({"access_token":access_token})
    
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


@api.route('/questions', methods=['GET'])
@ jwt_required()
def questions():
    
    questions = Questions.query.all()
    
    myQuestion =  [x.serialize() for x in questions]
    
    print(myQuestion)
    return jsonify(myQuestion)

@api.route('/questions',methods=['POST'])
@jwt_required()
def add_questions():
    payload = request.get_json()
    for item in payload:
        option = Options.query.filter_by(option=item["answer"]).one_or_none()
        print(option)
        instance = Questions(lessons = item["lessons"], question = item["question"], option = option, lesson_para = item["lesson_para"])
        
        db.session.add(instance)
        db.session.commit() 
      
    return "Success the words have been added", 200


@api.route('/options', methods=['GET'])
@ jwt_required()
def options():
    
    options = Options.query.all()
    
    myOptions =  [x.serialize() for x in options]
    print(options)
    print(myOptions)
    return jsonify(myOptions)

@api.route('/options', methods = ['POST'])
@jwt_required()
def add_options():
    payload = request.get_json()
    for item in payload:
        instance = Options(option = item["option"], audio = item["audio"])
        
        
        db.session.add(instance)
        db.session.commit() 
      
    return "Success the words have been added", 200


@api.route('/lesson_para', methods=['GET'])
@ jwt_required()
def lesson_para():
    
    lesson_para = Lesson_Para.query.all()
    
    mylesson_para =  [x.serialize() for x in lesson_para]
    
    print(lesson_para)
    return jsonify(lesson_para)

@api.route('/lesson_para',methods=['POST'])
@jwt_required()
def add_lesson_para():
    payload = request.get_json()
    for item in payload:
        instance = Lesson_Para(lesson_para = item["lesson_para"])
        
        db.session.add(instance)
        db.session.commit() 
      
    return "Success the words have been added", 200


@api.route('/account/<int:id>', methods=['DELETE'])
def del_account(id):
    account_data = Account.query.filter_by(id=id).delete()
    db.session.commit()

    return 'Account deleted', 204


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

@api.route('/lesson1_vocab/<string:mandarin>', methods=['GET'])
def getWords(mandarin):
    mandarin = Lesson1_vocab.query.filter_by(word=mandarin).one_or_none()
    return jsonify(mandarin.serialize()), 200

@api.route('/lesson1_vocab', methods=['POST'])
def words():
    payload = request.get_json()
    for item in payload:
        instance = Lesson1_vocab(word = item["word"], phonetic = item["phonetic"], mandarin = item["mandarin"], phoneticM = item["phoneticM"], images = item["images"], part_of_speech = item["part_of_speech"])
        
        db.session.add(instance)
        db.session.commit() 
      
    return "Success the words have been added", 200


@api.route("/lesson/<int:id>")
def get_lesson1_vocab(id):
    lesson1_vocab = Lesson1_vocab.query.filter_by(id=id).one_or_none()
    return jsonify(lesson1_vocab.serialize()), 200


@api.route("/lesson")
def get_lesson():
    
    return jsonify(lesson.serialize()), 200

@api.route("/answers", methods=["POST"])
def getAnswers():
    data = request.get_json()
    
    result =  Lesson1_vocab(word=data["word"], mandarin=data["mandarin"], phonetic=data["phonetic"], phoneticM=data["phoneticM"])
    db.session.add(result)
    db.session.commit()
    return "success"

@api.route("/answers", methods=["GET"])
def Answers():
    info = Lesson1_vocab.query.all()
    infoList = list(map(lambda x: x.serialize(), info))
    return jsonify(infoList), 200
    
@api.route('/vocab_words/<string:word>', methods=['GET'])
def vocab_word(word):
    resp = request.get(
        'https://api.dictionaryapi.dev/media/pronounciations/en/{word}-1-us.mp3'.format(word=word)
    ).json()
    
    mp3 = resp[0].get("phonetics",[{}])
    mp3_file = list(filter(lambda item: item["audio"] != "",mp3))[0]
    

    return jsonify(audio=mp3_file["audio"].serialize())

 
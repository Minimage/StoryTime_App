import os
from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()
#___________________________________________________________

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(120), nullable=False, default="")
    lastname = db.Column(db.String(120), nullable=False, default="")
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(275), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "username": self.username,
            "is_active ": self.is_active
        }
# _______________________________________________________________________________________________


class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User")

    def __repr__(self):
        return f'<Account {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "user": self.user

        }
# _______________________________________________________________________________________________


class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    favorites = db.Column(db.String(50), unique=False, nullable=True)
    # user = db.relationship("User")

    def __repr__(self):
        return f'<User {self.favorites}>'

    def serialize(self):
        return {
            "id": self.id,
            "favorites": self.favorites,
        }

# _______________________________________________________________________________________________

class Words(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(50), unique=True, nullable=False)
    phonetic = db.Column(db.String(50), unique=True, nullable=False)
    mandarin = db.Column(db.String(150), unique=True, nullable=False)
    phoneticM = db.Column(db.String(150), unique=True, nullable=False)
    
    
    def __repr__(self):
        return f'<Words {self.id}>'
    
    def serialize(self):
        return {
        "id" : self.id,
        "word" : self.word,
        "phonetic" : self.phonetic,
        "mandarin" : self.mandarin,
        "phoneticM" : self.phoneticM,
               
    }
        
# _______________________________________________________________________________________________

adjacency_relation = db.Table(
    "adjacency_relation",
    db.metadata,
    db.Column("node_id_parent", db.Integer, db.ForeignKey("lesson.id")),
    db.Column("node_id_child", db.Integer, db.ForeignKey("lesson.id"))
)


class Lesson(db.Model):
    __tablename__ = "lesson"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=True)
    child = db.relationship(
        "Lesson",
        secondary=adjacency_relation,
        primaryjoin=(id == adjacency_relation.c.node_id_parent),
        secondaryjoin=(id == adjacency_relation.c.node_id_child),
        backref="parent",
        uselist=False
    )

    def serialize(self):
        if self.child:
            child_url = "".join([
                os.getenv("BACKEND_URL"),
                "/api/lesson/",
                str(self.child.id)
            ])
        else:
            child_url = None

        return {
            "id": self.id,
            "name": self.name,
            "next": child_url
        }
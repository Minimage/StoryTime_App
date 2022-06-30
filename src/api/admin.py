  
import os
from flask_admin import Admin
from .models import db, User, Account, Favorites, Lesson1_vocab, Lesson, Questions
from flask_admin.contrib.sqla import ModelView
from wtforms.fields import PasswordField

class UserView(ModelView):
    column_list = ['email', 'username', 'first_name','last_name','is_active']
    column_editable_list = ['is_active',]
    column_exclude_list = ['_password', ]


    form_extra_fields = {
        'password': PasswordField('password')
    }

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='StoryTime_App Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(UserView(User, db.session))
    admin.add_view(ModelView(Account, db.session))
    admin.add_view(ModelView(Favorites, db.session))
    admin.add_view(ModelView(Lesson1_vocab, db.session))
    admin.add_view(ModelView(Lesson, db.session))
    admin.add_view(ModelView(Questions, db.session))

    
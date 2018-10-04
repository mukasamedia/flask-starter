from flask import Blueprint, render_template

page = Blueprint('page', __name__, template_folder='templates')


@page.route('/')
def home():
  """
  Render home page

  :return: Application home page
  """
  return render_template('page/home.html')


@page.route('/terms')
def terms():
  """
  Render terms page

  :return: Application terms page
  """
  return render_template('page/terms.html')


@page.route('/privacy')
def privacy():
  """
  Render privacy page

  :return: Application privacy page
  """
  return render_template('page/privacy.html')

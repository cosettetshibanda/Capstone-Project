class UserMailer < ApplicationMailer
    default from: 'cosettetshi@gmail.com'

  def welcome_email
    @user = params[:user]
    @url  = 'http://theVillage.com/signup'
    mail(to: @user.email, subject: 'Welcome to The Village')
  end
end

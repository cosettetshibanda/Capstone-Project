class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest

  has_many :questions 
  has_many :answers
end

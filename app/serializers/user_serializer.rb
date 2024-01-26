class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :questions 
  has_many :answers
end

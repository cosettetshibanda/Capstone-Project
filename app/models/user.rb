class User < ApplicationRecord
    has_secure_password

    has_many :questions, dependent: :destroy
    has_many :answers

    validates :username, presence: true, uniqueness: true
end

class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :user

    validates :answer, length: {minimum: 1, maximum: 200}
end

class Question < ApplicationRecord
    belongs_to :user
    belongs_to :topic

    has_many :answers, dependent: :destroy

    validates :post, length: {minimum: 10, maximum: 200}

end

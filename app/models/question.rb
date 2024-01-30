class Question < ApplicationRecord
    belongs_to :user
    belongs_to :topic

    has_many :answers, dependent: :destroy

    validates :post, presence: true, length: {maximum:10000}

end

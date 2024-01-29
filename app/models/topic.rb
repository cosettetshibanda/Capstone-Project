class Topic < ApplicationRecord
    has_many :questions

    validates :topic, presence: true, uniqueness: true
end

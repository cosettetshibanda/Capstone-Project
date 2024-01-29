class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :topic, :post, :user_id

  belongs_to :user
  belongs_to :topic

  has_many :answers
end

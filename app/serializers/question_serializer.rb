class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :post, :topic_id, :user_id

  belongs_to :user
  belongs_to :topic

  has_many :answers
end

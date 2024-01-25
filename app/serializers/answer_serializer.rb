class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer, :user_id, :topic_id

  belongs_to :user
  belongs_to :question
end

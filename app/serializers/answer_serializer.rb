class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer, :user_id, :topic_id
end

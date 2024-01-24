class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :topic, :post, :user_id
end

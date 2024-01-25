class TopicSerializer < ActiveModel::Serializer
  attributes :id, :topic

  has_many :questions
end

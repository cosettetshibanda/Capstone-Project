class TopicSerializer < ActiveModel::Serializer
  attributes :id, :topic

  has many :reviews
end

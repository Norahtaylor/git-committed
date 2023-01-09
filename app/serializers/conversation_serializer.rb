class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :match_id

  has_many :messages 
end

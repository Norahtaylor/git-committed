class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :conversation_id, :created_at

end

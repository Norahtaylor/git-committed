class MatchSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id, :accepted, :status

  has_many :conversations

  
# belongs_to :user_profile
end

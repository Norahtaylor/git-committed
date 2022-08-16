class MatchSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id, :accepted, :status

  
# belongs_to :user_profile
end

class MatchSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id, :accepted, :status
end

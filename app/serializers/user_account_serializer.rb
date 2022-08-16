class UserAccountSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest

  has_one :user_profile
end

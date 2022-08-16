class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_account_id, :name, :age, :birthdate, :gender, :interested_in, :bio, :education, :hometown, :profile_photo, :location

  # has_many :matches
end

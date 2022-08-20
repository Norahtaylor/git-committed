class UserAccountSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :age, :birthdate, :gender, :interested_in, :bio, :education, :hometown, :profile_photo, :location, :password


end

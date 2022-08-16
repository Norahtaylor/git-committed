class UserProfile < ApplicationRecord
    belongs_to :user_account

    has_many :matches
end

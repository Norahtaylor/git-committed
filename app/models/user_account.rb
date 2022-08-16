class UserAccount < ApplicationRecord
    has_one :user_profile, dependent: :destroy
    
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :username, presence: true

    has_secure_password 
    
    has_many :matches
end

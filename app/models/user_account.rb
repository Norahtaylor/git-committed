class UserAccount < ApplicationRecord
    # has_one :user_profile, dependent: :destroy
    
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :username, presence: true

    has_secure_password 

    has_many :receivers, foreign_key: :receiver_id, class_name: "Match"
    has_many :requestors, through: :receivers 
    
    has_many :requestors, foreign_key: :requestor_id, class_name: "Match"
    has_many :receivers, through: :requestors 
end

class UserProfile < ApplicationRecord
    # belongs_to :user_account

    # has_many :receivers, foreign_key: :receiver_id, class_name: "Match"
    # has_many :requestors, through: :receivers 
    
    # has_many :requestors, foreign_key: :requestor_id, class_name: "Match"
    # has_many :receivers, through: :requestors 

    # has_many :matches
end

class Match < ApplicationRecord
    # belongs_to :user_account

    # belongs_to :requestor, class_name: "UserProfile"
    # belongs_to :receiver, class_name: "UserProfile"

    belongs_to :requestor, class_name: "UserAccount"
    belongs_to :receiver, class_name: "UserAccount"

    accepts_nested_attributes_for :requestor, :receiver


    # belongs_to :user_profile
end

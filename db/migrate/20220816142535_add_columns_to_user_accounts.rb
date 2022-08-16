class AddColumnsToUserAccounts < ActiveRecord::Migration[7.0]
  def change
    add_column :user_accounts, :name, :string
    add_column :user_accounts, :age, :string
    add_column :user_accounts, :birthdate, :datetime
    add_column :user_accounts, :gender, :string
    add_column :user_accounts, :interested_in, :string
    add_column :user_accounts, :bio, :text
    add_column :user_accounts, :education, :string
    add_column :user_accounts, :hometown, :string
    add_column :user_accounts, :profile_photo, :string
    add_column :user_accounts, :location, :string

  end
end

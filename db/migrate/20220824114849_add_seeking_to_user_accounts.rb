class AddSeekingToUserAccounts < ActiveRecord::Migration[7.0]
  def change
    add_column :user_accounts, :seeking, :string
  end
end

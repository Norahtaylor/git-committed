class AddAgeToUserAccounts < ActiveRecord::Migration[7.0]
  def change
      add_column :user_accounts, :age, :string
  end
end

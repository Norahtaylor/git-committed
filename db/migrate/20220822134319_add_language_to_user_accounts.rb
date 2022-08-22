class AddLanguageToUserAccounts < ActiveRecord::Migration[7.0]
  def change
    add_column :user_accounts, :language, :string
  end
end

class AddUserAccountIdToMatches < ActiveRecord::Migration[7.0]
  def change
    add_column :matches, :user_account_id, :integer
  end
end

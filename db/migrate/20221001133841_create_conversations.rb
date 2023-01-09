class CreateConversations < ActiveRecord::Migration[7.0]
  def change
    create_table :conversations do |t|
      t.string :title
      t.integer :match_id
      
      t.timestamps
    end
  end
end

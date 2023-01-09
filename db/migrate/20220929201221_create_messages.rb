class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :requestor_id
      t.integer :receiver_id
      t.string :content
      t.integer :conversation_id

      t.timestamps
    end
  end
end

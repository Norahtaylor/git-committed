class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.integer :requestor_id
      t.integer :receiver_id
      t.boolean :accepted
      t.string :status

      t.timestamps
    end
  end
end

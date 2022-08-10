class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.integer :user_account_id
      t.string :name
      t.integer :age
      t.datetime :birthdate
      t.string :gender
      t.string :interested_in
      t.text :bio
      t.string :education
      t.string :hometown
      t.string :profile_photo
      t.string :location

      t.timestamps
    end
  end
end

class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string :firstname, :lastname
    end
  end
end

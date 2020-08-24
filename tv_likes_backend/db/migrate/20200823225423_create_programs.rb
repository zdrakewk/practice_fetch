class CreatePrograms < ActiveRecord::Migration[6.0]
  def change
    create_table :programs do |t|
      t.string :title
      t.string :description
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end

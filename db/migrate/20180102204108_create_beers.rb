class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :brewery
      t.string :style
      t.string :image_url
      t.decimal :abv

      t.timestamps
    end
  end
end

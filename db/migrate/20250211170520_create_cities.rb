class CreateCities < ActiveRecord::Migration[8.0]
  def change
    create_table :cities do |t|
      t.integer :codigo_ibge
      t.string :cidade
      t.string :uf

      t.timestamps
    end
  end
end

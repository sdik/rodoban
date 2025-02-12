class CreateEmployees < ActiveRecord::Migration[8.0]
  def change
    create_table :employees do |t|
      t.string :nome
      t.string :abreviado
      t.string :funcao
      t.string :telefone
      t.date :admissao
      t.string :senha

      t.timestamps
    end
  end
end

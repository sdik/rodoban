class CreateClients < ActiveRecord::Migration[8.0]
  def change
    create_table :clients do |t|
      t.string :nome
      t.string :apelido
      t.string :endereco
      t.string :bairro
      t.string :cep
      t.string :pessoa
      t.string :cnpj
      t.string :cpf
      t.string :ie
      t.string :rg
      t.string :contato
      t.string :fone1
      t.string :fone2
      t.string :celular
      t.string :email
      t.integer :status
      t.string :uf
      t.string :cidade
      t.integer :ibge

      t.timestamps
    end
  end
end

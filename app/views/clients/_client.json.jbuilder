json.extract! client, :id, :nome, :apelido, :endereco, :bairro, :cep, :pessoa, :cnpj, :cpf, :ie, :rg, :contato, :fone1, :fone2, :celular, :email, :status, :uf, :cidade, :ibge, :created_at, :updated_at
json.url client_url(client, format: :json)

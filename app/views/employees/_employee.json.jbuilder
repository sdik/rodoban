json.extract! employee, :id, :nome, :abreviado, :funcao, :telefone, :admissao, :senha, :created_at, :updated_at
json.url employee_url(employee, format: :json)

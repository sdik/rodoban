require "test_helper"

class ClientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @client = clients(:one)
  end

  test "should get index" do
    get clients_url
    assert_response :success
  end

  test "should get new" do
    get new_client_url
    assert_response :success
  end

  test "should create client" do
    assert_difference("Client.count") do
      post clients_url, params: { client: { apelido: @client.apelido, bairro: @client.bairro, celular: @client.celular, cep: @client.cep, cidade: @client.cidade, cnpj: @client.cnpj, contato: @client.contato, cpf: @client.cpf, email: @client.email, endereco: @client.endereco, fone1: @client.fone1, fone2: @client.fone2, ibge: @client.ibge, ie: @client.ie, nome: @client.nome, pessoa: @client.pessoa, rg: @client.rg, status: @client.status, uf: @client.uf } }
    end

    assert_redirected_to client_url(Client.last)
  end

  test "should show client" do
    get client_url(@client)
    assert_response :success
  end

  test "should get edit" do
    get edit_client_url(@client)
    assert_response :success
  end

  test "should update client" do
    patch client_url(@client), params: { client: { apelido: @client.apelido, bairro: @client.bairro, celular: @client.celular, cep: @client.cep, cidade: @client.cidade, cnpj: @client.cnpj, contato: @client.contato, cpf: @client.cpf, email: @client.email, endereco: @client.endereco, fone1: @client.fone1, fone2: @client.fone2, ibge: @client.ibge, ie: @client.ie, nome: @client.nome, pessoa: @client.pessoa, rg: @client.rg, status: @client.status, uf: @client.uf } }
    assert_redirected_to client_url(@client)
  end

  test "should destroy client" do
    assert_difference("Client.count", -1) do
      delete client_url(@client)
    end

    assert_redirected_to clients_url
  end
end

require "application_system_test_case"

class ClientsTest < ApplicationSystemTestCase
  setup do
    @client = clients(:one)
  end

  test "visiting the index" do
    visit clients_url
    assert_selector "h1", text: "Clients"
  end

  test "should create client" do
    visit clients_url
    click_on "New client"

    fill_in "Apelido", with: @client.apelido
    fill_in "Bairro", with: @client.bairro
    fill_in "Celular", with: @client.celular
    fill_in "Cep", with: @client.cep
    fill_in "Cidade", with: @client.cidade
    fill_in "Cnpj", with: @client.cnpj
    fill_in "Contato", with: @client.contato
    fill_in "Cpf", with: @client.cpf
    fill_in "Email", with: @client.email
    fill_in "Endereco", with: @client.endereco
    fill_in "Fone1", with: @client.fone1
    fill_in "Fone2", with: @client.fone2
    fill_in "Ibge", with: @client.ibge
    fill_in "Ie", with: @client.ie
    fill_in "Nome", with: @client.nome
    fill_in "Pessoa", with: @client.pessoa
    fill_in "Rg", with: @client.rg
    fill_in "Status", with: @client.status
    fill_in "Uf", with: @client.uf
    click_on "Create Client"

    assert_text "Client was successfully created"
    click_on "Back"
  end

  test "should update Client" do
    visit client_url(@client)
    click_on "Edit this client", match: :first

    fill_in "Apelido", with: @client.apelido
    fill_in "Bairro", with: @client.bairro
    fill_in "Celular", with: @client.celular
    fill_in "Cep", with: @client.cep
    fill_in "Cidade", with: @client.cidade
    fill_in "Cnpj", with: @client.cnpj
    fill_in "Contato", with: @client.contato
    fill_in "Cpf", with: @client.cpf
    fill_in "Email", with: @client.email
    fill_in "Endereco", with: @client.endereco
    fill_in "Fone1", with: @client.fone1
    fill_in "Fone2", with: @client.fone2
    fill_in "Ibge", with: @client.ibge
    fill_in "Ie", with: @client.ie
    fill_in "Nome", with: @client.nome
    fill_in "Pessoa", with: @client.pessoa
    fill_in "Rg", with: @client.rg
    fill_in "Status", with: @client.status
    fill_in "Uf", with: @client.uf
    click_on "Update Client"

    assert_text "Client was successfully updated"
    click_on "Back"
  end

  test "should destroy Client" do
    visit client_url(@client)
    click_on "Destroy this client", match: :first

    assert_text "Client was successfully destroyed"
  end
end

class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :edit, :update, :destroy]

  # GET /clients or /clients.json
  def index
    @clients = Client.search(params[:search])
    @clients = @clients.order("#{sort_column} #{sort_direction}")
    @clients = @clients.page(params[:page]).per(params[:per_page])
  end

  # GET /clients/1 or /clients/1.json
  def show
  end

  # GET /clients/new
  def new
    @client = Client.new
    @client.status = 1 # Ativo por padrão
  end

  # GET /clients/1/edit
  def edit
  end

  # POST /clients or /clients.json
  def create
    @client = Client.new(client_params)

    if @client.save
      redirect_to clients_path, notice: 'Cliente criado com sucesso.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clients/1 or /clients/1.json
  def update
    if @client.update(client_params)
      redirect_to clients_path, notice: 'Cliente atualizado com sucesso.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1 or /clients/1.json
  def destroy
    @client.destroy
    redirect_to clients_path, notice: 'Cliente excluído com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_params
      params.require(:client).permit(
        :nome, :apelido, :endereco, :bairro, :cep, 
        :pessoa, :cnpj, :cpf, :ie, :rg, :contato,
        :fone1, :fone2, :celular, :email, :status,
        :uf, :cidade, :ibge
      )
    end

    def sort_column
      Client.column_names.include?(params[:sort]) ? params[:sort] : "nome"
    end

    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end
end

class UsersController < ApplicationController
  def index
    @users = User.all
    
    # Aplicar busca se houver
    @users = @users.where("name ILIKE ?", "%#{params[:search]}%") if params[:search].present?
    
    # Ordenação
    @users = @users.order("#{sort_column} #{sort_direction}")
    
    # Paginação
    @users = @users.page(params[:page]).per(params[:per_page])
  end

  private

  def sort_column
    User.column_names.include?(params[:sort]) ? params[:sort] : "created_at"
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "desc"
  end
end 
module GridHelper
  def render_grid(records, columns, options = {})
    options = {
      title: '',
      new_button: false,
      edit_button: false,
      delete_button: false,
      search: true,
      per_page: 10
    }.merge(options)

    render partial: 'shared/grid', locals: {
      records: records,
      columns: columns,
      options: options,
      search_params: search_params
    }
  end

  private

  def search_params
    params.permit(:sort, :direction, :page, :per_page, :search, :commit)
  end

  def sort_column
    params[:sort] || "created_at"
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "desc"
  end
end 
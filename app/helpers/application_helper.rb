module ApplicationHelper
  def sort_link(column, title = nil)
    title ||= column.titleize
    direction = column == sort_column && sort_direction == "asc" ? "desc" : "asc"
    icon = sort_direction == "asc" ? "↑" : "↓"
    icon = column == sort_column ? icon : ""
    link_to "#{title} #{icon}", request.params.merge(sort: column, direction: direction), class: 'text-black dark:text-white'
  end
end

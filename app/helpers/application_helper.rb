module ApplicationHelper
  def sort_link(column, label)
    direction = column == sort_column && sort_direction == "asc" ? "desc" : "asc"
    icon = if column == sort_column
             direction == "asc" ? 
               '<i class="fas fa-sort-up text-primary"></i>' : 
               '<i class="fas fa-sort-down text-primary"></i>'
           else
             '<i class="fas fa-sort text-gray-400"></i>'
           end
    
    link_to({ sort: column, direction: direction }, 
            class: "flex items-center justify-between w-full text-sm font-medium #{column == sort_column ? 'text-primary' : 'text-gray-500'}") do
      content_tag(:span, label.upcase, class: "uppercase") + 
      content_tag(:span, icon.html_safe, class: "ml-2")
    end
  end
end

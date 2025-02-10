class ApplicationController < ActionController::Base
  include GridHelper
  helper_method :sort_column, :sort_direction
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
end

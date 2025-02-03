class AddstatusToClients < ActiveRecord::Migration[8.0]
  def change
    remove_column :clients, :status
    add_column :clients, :status, :integer, default: 1, null: false
  end
end

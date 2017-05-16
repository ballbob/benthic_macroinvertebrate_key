class AddInformationToQuestion < ActiveRecord::Migration
  def change
    add_column :questions, :information, :string
  end
end

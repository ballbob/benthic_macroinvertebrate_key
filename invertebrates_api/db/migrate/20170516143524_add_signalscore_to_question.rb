class AddSignalscoreToQuestion < ActiveRecord::Migration
  def change
    add_column :questions, :signalscore, :integer
  end
end

class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question
      t.string :answer
      t.string :answerimg
      t.integer :button_action
      t.string :othertext

      t.timestamps null: false
    end
  end
end

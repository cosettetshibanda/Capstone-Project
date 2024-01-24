class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :post
      t.integer :user_id
      t.integer :topic_id

      t.timestamps
    end
  end
end

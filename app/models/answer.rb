class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :user

    validates :answer, length: {minimum: 2, maximum: 200}
    validate :user_cannot_answer_own_question

  private

  def user_cannot_answer_own_question
    if user_id == question.user_id
      errors.add(:user, "cannot answer their own question")
    end
  end
end

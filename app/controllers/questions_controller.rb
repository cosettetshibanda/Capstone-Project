class QuestionsController < ApplicationController
    before_action :question_find, only: [:update, :destroy]


    def index
        if params[:user_id]
            user = User.find_by_id(params[:user_id])
            @questions = user.questions
        else
            @questions = Question.all 
        end
            render json: @questions, status: :ok
    end

    def show
        render json: @question, status: :ok
    end

    def update
        @question.update!(question_params)
        render json: @question, status: :ok
    end

    def create
        question = @current_user.questions.create!(question_params)
        render json: question, status: :created
    end

    def destroy
        @question.destroy
        head :no_content
    end


    private

    def question_find
      @question = @current_user.questions.find(params[:id])
    end

    def question_params
        params.require(:question).permit(:post, :id, :topic_id)
    end
end

class AnswersController < ApplicationController
    before_action :answer_find, only: [:update, :destroy]


    def index
        if params[:user_id]
            user = User.find_by_id(params[:user_id])
            @answers = user.answers
        else
            @answers = Answer.all 
        end
            render json: @answers, status: :ok
    end

    def show
        render json: @answer, status: :ok
    end

    def update
        @answer.update!(answer_params)
        render json: @answer, status: :ok
    end

    def create
        answer = @current_user.answers.create!(answer_params)
        render json: answer, status: :created
    end

    def destroy
        @answer.destroy
        head :no_content
    end


    private

    def question_find
      @answer = @current_user.answers.find(params[:id])
    end

    def question_params
        params.require(:answer).permit(:answer, :id, :question_id)
    end
end

class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: User.all
    end
    
    # def create
    #     user = User.create!(user_params)
    #     session[:user_id] = user.id 
    #     render json: user, status: :created
    # end

    def create
        user = User.new(user_params)
        if user.save
          session[:user_id] = user.id  # Set session[:user_id] with the new user's ID
          UserMailer.with(user: user).welcome_email.deliver_now!    
          render json: user
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :email)
        #  params.require(:user).permit(:username, :password, :email)
        # params.require(:user).permit(:username, :password, :email, :password_confirmation, :password_digest)
    end
end

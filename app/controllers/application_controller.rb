class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

  
  before_action :authorize

  def authorize_user_resource(user_id)
    render json: { errors: ["You are not authorized to edit this resource"]}, status: :unauthorized unless user_id == current_user.id 
  end

  def authorized
    render json: { errors: ["You are already logged in"]}, status: :unauthorized if session.include? :user_id
  end

  private
  

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
  end

end

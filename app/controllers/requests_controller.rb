class RequestsController < ApplicationController

  def index
    if current_user.typeuser == "0"
      render json: Request.includes(:user).order(created_at: :desc).where(user_id: current_user.id).all
    elsif current_user.typeuser == "1"
      render json: Request.includes(:user).order(created_at: :desc).all
    end
  end

  def create
    request = Request.create(body: params[:body], user_id: current_user.id)
    render json: request
  end
end

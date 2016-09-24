class RequestsController < ApplicationController

  def index
    render json: Request.includes(:user).order(created_at: :desc).all
  end

  def create
    request = Request.create(body: params[:body], user_id: current_user.id)
    render json: request
  end
end

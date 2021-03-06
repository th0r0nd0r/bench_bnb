class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @user = User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end


end

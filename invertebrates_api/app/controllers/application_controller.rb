class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  skip_before_filter :verify_authenticity_token
  after_filter :cors_set_access_control_headers
  respond_to :json

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000' 
  end

end
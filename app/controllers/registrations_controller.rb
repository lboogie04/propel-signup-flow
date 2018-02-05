class RegistrationsController < Devise::RegistrationsController
 
  protected

  def after_sign_up_path_for(resource)
    '/welcome' # Or :prefix_to_your_route
  end
 
 private

	def sign_up_params
		params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name)
	end

	def account_update_params
		params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name)
	end
end



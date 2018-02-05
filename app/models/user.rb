class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
 
  validates_presence_of :email
  validates_uniqueness_of :email
 
  devise :omniauthable, omniauth_providers: %i[linkedin]

 def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.linkedin_data"] && session["devise.linkedin_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end
 
 def self.from_omniauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    user.first_name = auth.info.name   # assuming the user model has a name
    # If you are using confirmable and the provider(s) you use validate emails, 
    # uncomment the line below to skip the confirmation emails.
    # user.skip_confirmation!
  end
end
end

#https://www.linkedin.com/uas/oauth2/authorization?client_id=78wotmu8bic1fc&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fusers%2Fauth%2Flinkedin%2Fcallback&response_type=code&scope=user%2Cpublic_repo&state=ecf770960a03c42cadf5e3be73bf9bfc2e6237a152edce1a

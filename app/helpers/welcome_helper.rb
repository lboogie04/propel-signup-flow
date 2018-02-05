module WelcomeHelper
 
 def investing_props
   {
    user: current_user,
    options: ["an individual", "a non-institutional entity", "an institution"]
    
    }
 end
 
 def personalize_props
  {
   technologies: ["Aerospace & Transportation", "Industrial Technologies", "Energy & Green Technologies", "Food & Agriculture", "IT & Communications", "Life Sciences"],
   sectors: ["Food and Agriculture", "Life Sciences: Medical Devices", "Life Sciences: Medical Diagnostics", "Life Sciences: Biopharma", "Computing: Hardware", "Energy", "Computing: Software", "Computing: Networks", "Connected Devices", "Chemicals", "Space Exploration"]   
   }
 end
 
end

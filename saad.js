
	
  
  
   
		
		var translator = new Translator();
		function tran( source=null ,target=null ,text=null)
		{		var result = "";
		
				
				config = {
						from: source,
						to: target,
						api_key: 'AIzaSyBfgWAoQRuH-jXWQxDjD8GCcjsyKjka5ZU', // use your own key
						callback: function (translatedText) {

							document.getElementById("test").innerHTML=translatedText 


						}
					
				};
				
			   translator.translateLanguage(text, config);
			 
		
		}
		
		
	    
	
		
		
		

   
  
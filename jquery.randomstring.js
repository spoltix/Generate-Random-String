jQuery.fn.RandomString = function(argument){
    var param = {
        length : '8',
        chaine :'abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789'
    }; // on définit les paramètres et leurs valeurs par défaut
   
    param = $.extend(param, argument); 
    
    var longueur = param.chaine.length;
    var res="";
    for(var i = 0; i < param.length; i++){
		x = Math.floor(Math.random()*longueur);
		res +=param.chaine[x];
	} 
    this.val(res); 
    return this; 
};

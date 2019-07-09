document.oncontextmenu = function() {
    return false;
}

function creaLoghi(){
		var testo = "<img src=\"../img/loghi/LogoIren.png\" alt=\"Logo Iren\" class=\"Logo\">\n";
		testo += "<img src=\"../img/loghi/LogoEcofan.png\" alt=\"Logo Ecofan\" class=\"Logo\" style=\"width:6.3%;\">\n";
		testo +=  "<img src=\"../img/loghi/LogoAmga.png\" alt=\"Logo Amga\" class=\"Logo\">";
		testo += "<p class="+"copyrightTesto"+">Copyright &copy; Iren S.p.A. | All rights reserved</p>"
		return testo;
	}


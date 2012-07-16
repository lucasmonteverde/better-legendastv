/**
 * Better Legendas.TV
 *
 * Copyright (c) 2010-2012 Lucas Monteverde <monteverde13@yahoo.com.br>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
**/
//console.log = function() {}
(function(){

	//Pega todos elementos que possuem javacript popup event;
	var popup_elements = document.querySelectorAll('[onclick*="javascript:abredown"]');
	
	// pagina de informações da legenda (popup);
	var popup_link = "http://legendas.tv/info.php?d=";
	
	var length = popup_elements.length;
	
	for (var i = 0; i < length; ++i) {
	
		//if(!popup_elements[i].onclick) continue;
		//pega id da legenda, dentro do onclick de cada elemento
		var link = popup_link + popup_elements[i].onclick.toString().match(/\'(.+)\'/i)[1];
		
		popup_elements[i].link = link;
		
		//Monta um link para a pagina da legenda, carregando uma nova pagina, ao invez de um popup
		popup_elements[i].innerHTML = '<a href="' + link + '" target=_blank">'  + popup_elements[i].innerHTML + '</a>';

		//override
		//previne link, e chama download da legenda direto se ctrl estiver precionado
		popup_elements[i].onclick = function(e){
			if(e.ctrlKey){
				window.location.href = this.link + "&c=1";
				e.preventDefault();
				return false;
			}
		};
	}
	/* conteudodest.addEventListener('DOMSubtreeModified', function(e){
	
		this.querySelector('div:nth-child(4)').style = "width:auto!important";
		this.querySelector('div[align="center"]').style = "clear:both!important";
		console.log(this);
	}); */
	
	holder.parentNode.removeChild(holder);
	
	/* New Style */
	
}(document));


//Helpers
function removeQuery(rq){
	console.log("removed_query: " + rq);
	removeElementAll( document.querySelectorAll(rq) );
}

function removeElement(obj){
	if(obj){
		obj.parentNode.removeChild(obj);
		return true;
	}else 
		return false;
}

function removeElementAll(node){
	var i = node.length;
	while(i--) removeElement(node[i]);
}
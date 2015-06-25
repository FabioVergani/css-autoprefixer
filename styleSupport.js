function Capitalize(s){return s.charAt(0).toUpperCase() + s.slice(1);}

function styleSupport(prop){

	var supported, p=prop, e=document.documentElement, o=e.style, prefixes = ['Webkit','Moz','ms','O'];

	if(p in o) {
		supported = p;
	}else{
		for(var vendorProp,s=Capitalize(p), i=0, m=prefixes, l=(m.length+0); i<l ; vendorProp=(m[i++]+s)){
			if(vendorProp in o){
				supported=vendorProp;
				break;
			};
		}
	};

	return supported;
}

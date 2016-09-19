walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	v = v.replace(/\bCat\b/g, "Nuko");
	v = v.replace(/\bcat\b/g, "nuko");
	v = v.replace(/\bKitten\b/g, "Tiny Nuko");
	v = v.replace(/\bkitten\b/g, "tiny nuko");
	
	v = v.replace(/\bChina\b/g, "Peasant Land");
	v = v.replace(/\bchina\b/g, "peasant land");
	v = v.replace(/\bThe Chinese\b/g, "The Peasants");
	v = v.replace(/\bthe Chinese\b/g, "the Peasants");
	v = v.replace(/\bChinese\b/g, "Peasant");
	v = v.replace(/\bchinese\b/g, "peasant");
	
	v = v.replace(/\bKorea\b/g, "Pleb Land");
	v = v.replace(/\bkorea\b/g, "pleb land");
	v = v.replace(/\bKorean\b/g, "Pleb");
	v = v.replace(/\bkorean\b/g, "pleb");
	v = v.replace(/\bKoreans\b/g, "Plebs");
	v = v.replace(/\bkoreans\b/g, "plebs");
	v = v.replace(/\bNorth Korea\b/g, "Best Korea");
	
	v = v.replace(/\bJapan\b/g, "Serf Land");
	v = v.replace(/\bjapan\b/g, "serf land");
	v = v.replace(/\bThe Japanese\b/g, "The Serfs");
	v = v.replace(/\bthe Japanese\b/g, "the Serfs");
	v = v.replace(/\bJapanese\b/g, "Serf");
	v = v.replace(/\bJapanese\b/g, "serf");
	
	v = v.replace(/\bTaiwan\b/g, "Servant Land");
	v = v.replace(/\btaiwan\b/g, "servant land");
	v = v.replace(/\bTaiwanese\b/g, "Servant");
	v = v.replace(/\btaiwanese\b/g, "servant");
	
	
	textNode.nodeValue = v;
}



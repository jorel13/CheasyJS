
    
	//Base for building Elemental object
	var Elemental = function() {};
	var ElementalCollection = function() {};

	//Prototype method for adding event listeners to Elemental
	Elemental.prototype.addListener = function (event, handler) {
	  //Null checks
	  if (this.htmlElement && event && handler) {
		//We are going to default to using bubble up method
		this.htmlElement.addEventListener(event, handler, false);
	  }
	};

	//Prototype method for hiding/showing Elemental
	Elemental.prototype.toggle = function () {
	  //Null Check
	  if (this.htmlElement) {
		//If it is alread hiding then revert to previous display value
		if (this.htmlElement.style.display === "none") {
		  this.htmlElement.style.display = '';
		} else {
		  //Else set to none in order to hide it
		  this.htmlElement.style.display = "none";
		}
	  }
	};

	//Prototype method for setting CSS style of Elemental
	Elemental.prototype.setStyle = function (styleProperties) {
	  //Null Check
	  if (this.htmlElement) {
		//Easiest way to accomplish this is by setting the cssText value
		//This means using string css notation as argument for this method
		this.htmlElement.style.cssText = styleProperties;
	  }
	};
	
	//Prototype method for toggling classes that are applied to the Elemental
	Elemental.prototype.toggleClass = function(className) {
		if(className){
			if(this.htmlElement.classList.contains(className)){
				this.htmlElement.classList.remove(className);
			}else{
				this.htmlElement.classList.add(className);
			}
		}
	};
	
	//Prototype method for getting the attribute of an Elemental
	Elemental.prototype.get = function(attribute) {
		if(attribute){
			return this.htmlElement.getAttribute(attribute);
		}
	};

	//Prototype method to loop through each elemental in the collection
	ElementalCollection.prototype.each = function(process){
	  if(this.elementalArray.length > 0){    
		for(var i = 0; i < this.elementalArray.length; i++) {
		  process(this.elementalArray[i]);
		}
	  }
	};
	
	//Prototype method to change the toggle the class of each elemental in the collection
	ElementalCollection.prototype.toggleClass = function(className){
		this.each(function(elemental) {
			elemental.toggleClass(className);
		});
	};

	//This creates an Elemental with the HTML element built inside of it
	var summon =  function(selector){
	  if(selector){
		var tempElement = document.querySelectorAll(selector)[0];
		var tempElemental = new Elemental();
		tempElemental.htmlElement = tempElement;
		return tempElemental;
	  }
	};

	//This creates an array of Elementals with the HTML element built inside of each
	var summonAll =  function(selector){
	  if(selector){
		var tempElements = document.querySelectorAll(selector);
		var elementalsCollection = new ElementalCollection();
			
		elementalsCollection.elementalArray = [];
		for(var i = 0; i < tempElements.length; i++) {
		  var tempElemental = new Elemental();
			tempElemental.htmlElement = tempElements[i];
		  elementalsCollection.elementalArray.push(tempElemental);
		}    
		return elementalsCollection;
	  }
	};

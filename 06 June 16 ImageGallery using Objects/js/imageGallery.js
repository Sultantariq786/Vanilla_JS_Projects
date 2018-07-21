/* Object Oriented JS for Image Gallery Author = "Tariq Khan"*/

	var Gallery = {
	Images : ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg'],// define object property
	currentIndex : 0,    	// define object property
	Next : function(){		// define object method
					if(Gallery.currentIndex < (Gallery.Images.length-1) )
					{
					Gallery.currentIndex++;
					}
					else
					{
					Gallery.currentIndex = 0;
					}
					Gallery.Display();
					},
	Prev : function(){		// define object method
					if(Gallery.currentIndex > 0 )
					{
					Gallery.currentIndex--;
					}
					else
					{
					Gallery.currentIndex = (Gallery.Images.length-1);
					}
					Gallery.Display();
					},
	Display : function(){		// define object method
					var photoGallery = document.getElementById('galleryShow');
					var currentImage = Gallery.Images[Gallery.currentIndex];
					photoGallery.src = "images/" + currentImage;

	    			}
	};

	var pause = setInterval(Gallery.Next, 2500);
	document.getElementById('sliderWrap').onmouseover = function(){
		clearInterval(pause);
	}

	document.getElementById('sliderWrap').onmouseout = function (){
		pause = setInterval(Gallery.Next, 2500);
	}

	document.getElementById('prevId').onclick = function(){
		Gallery.Prev();
		clearInterval(pause);	
	}
	document.getElementById('nextId').onclick = function(){
		Gallery.Next();	
		clearInterval(pause);	
	}

	

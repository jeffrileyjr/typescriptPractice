Build Specifications:  
•	Declare an interface called Camera that contains the following properties: 
o	brand - string o model - string o price - number o fixedLens - boolean 
•	Declare an array called cameraCollection which is of type Camera array 
•	Add these four objects to cameraCollection: 
 
Brand 	model 	Price 	fixedLens 
Nikon 	D600 	2000 	false 
Nikon 	Z5 	1500 	false 
Fujifilm 	X100F 	1200 	true 
Polaroid 	OneStep 2 	80 	true 
 
 
•	Declare a function named findCameras o 	Parameter(s): arrayOfCameras (type Camera array), model (type string) o 	Return type: Camera array 
o	Functionality: When called, this function will return an array of all the cameras from the arrayOfCameras argument that have the specified model argument. If there are no cameras that have that model, return an empty array. 
 
 
•	Declare a function named addCamera o 	Parameter(s): arrayOfCameras (type Camera array), brand (type string), model (type string), price (type number), fixedLens (type boolean) 
o	Return type: void 
o	Functionality: construct an object of type Camera and push it into arrayOfCameras 
 
 
•	Declare a function named areThereAnyFixedLensForSale o 	Parameter(s): arrayOfCameras (type Camera array) o 	Return type: boolean 
o	Functionality: when called, this function will return true if there is a fixedLens camera in the arrayOfCameras argument and false otherwise. 
 
 
	• 	 
•	Declare a function named collectionValue o 	Parameter(s): arrayOfCameras (type Camera array) o 	Return type: number 
o	Functionality: when called, this function will calculate total value of camera collection. 
 
  
 
Setup: 
 
 
1.	Create your TS file, script.ts. 
2.	On the command line run… tsc --init 
3.	(Optional) In VS Code, modify the tsconfig.json file. Change "target": "es5" to "target": "es6". This will allow you to use all the beautiful ES6 features that we love! 
4.	To start TypeScript automatically compiling, run this on the command line. tsc --watch 
5.	In a separate command line tab or window run your JavaScript with one of two options: 
a.	node script.js - run each time you test 
b.	nodemon script.js - run once to automatically re-run your code every time you save 

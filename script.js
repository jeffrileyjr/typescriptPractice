"use strict";
// we declare an array called cameraCollection which is of type Camera array
let cameraCollection = [
    {
        brand: "Nikon",
        model: "D600",
        price: 2000,
        fixedLens: false
    },
    {
        brand: "Nikon",
        model: "Z5",
        price: 1500,
        fixedLens: false
    },
    {
        brand: "Fujifilm",
        model: "X100F",
        price: 1200,
        fixedLens: true
    },
    {
        brand: "Polaroid",
        model: "OneStep 2",
        price: 80,
        fixedLens: true
    }
];
// we have the | void as this can return an array of type Camera or nothing, though it works without it
function findCameras(arrayofCameras, model) {
    // we make a new array to hold the camera objects found that match the model parameter passed in
    // we then loop through our array and for each match, push it into this new array, then return that array (which could be empty)
    let foundCameras = [];
    for (let camera of cameraCollection) {
        if (camera.model === model) {
            foundCameras.push(camera);
        }
    }
    return foundCameras;
}
// we console.log to test if this is working
// this returns one match
// console.log(findCameras(cameraCollection, "D600"));
// this returns no matches, so it is an empty array
// console.log(findCameras(cameraCollection, "D850"));
// we need to make a function that adds a new camera object to our camera array which is of type Camera array
function addCamera(arrayofCameras, brand, model, price, fixedLens) {
    // we just need to make a variable to hold our new object, then push it into our camera array
    let newCamera = { brand, model, price, fixedLens };
    arrayofCameras.push(newCamera);
}
// we console log our array before we add anything
// console.log(cameraCollection);
// we then run our function, adding a new object
// addCamera(cameraCollection, 'Nikon', 'Z50', 850, false);
// and console log our array again and see the object is now there.
// console.log(cameraCollection);
// we need to return true if any of our cameras have a fixed Lens
// we use the filter function to adds any cameras with a fixed lens to our new fixedLensCameras array
// If the length of this is greater than 0, we know the answer is true, else it's false
function areThereAnyFixedLensForSale(arrayofCameras) {
    const fixedLensCameras = arrayofCameras.filter(camera => camera.fixedLens);
    if (fixedLensCameras.length > 0) {
        return true;
    }
    return false;
}
// this should return true. Then if you change all the objects to false for fixedLens and run again, you should get false
// console.log(areThereAnyFixedLensForSale(cameraCollection));
// we want to find out the total value of our collection, so we declare a value of zero. Then using our camera aray, we do a forEach and take the camera.price 
// and add it to our value, then we return that value
function collectionValue(arrayofCameras) {
    let value = 0;
    arrayofCameras.forEach((camera) => {
        value += camera.price;
    });
    return value;
}
// this should give us the total value of our collection
// console.log(collectionValue(cameraCollection));

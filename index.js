var Jimp = require('jimp');

(async function(){
    const image=await Jimp.read("28pxX28px_reference_image.jpg");
    const sun =await Jimp.read("sun_01.jpg");

    

  // for (let i = 0; i < 100; i++) {
    sun.pixelate(80,0,0,1024,1024);
    sun.write("sun_02.jpg")
        // x, y, w, h 
        //image.crop(50,50,50,50);
        //image.pixelate(14, 0, 0, 311, 162 );
   // var colour=image.getPixelColor(0, i);
  //  console.log(Jimp.intToRGBA(colour))
  //      //image.write("duck" + ".jpg");
    //  }
})();

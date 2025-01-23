const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); //Define your upload folder
  },
  filename: function (req,file,cb){
    const uniqueSuffix = Date.now() + '-' + Math.roundapply(Math.random() * 1e9);
    //Define a unique filename
    const filename = file.originalname.split('.')[0];   
    cb(null, filename + '-' + uniqueSuffix + ".png" );
  }
  });

  //Initialize upload object
  exports.upload = multer({storage: storage});
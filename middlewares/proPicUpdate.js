const multer = require("multer")
const path = require("node:path")
module.exports = (req, res, next) => {
    const data = req.body
    const storageConfig = multer.diskStorage({
        destination: path.join(__dirname, 'uploads'),
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname)
        },
    })

    const fileFilterConfig = function (req, file, cb) {
        if (file.mimetype === "image/jpeg"
            || file.mimetype === "image/png"
        ) { cb(null, true) }
        else {
            cb(null, false)
        }
    }

    const upload = multer({
        storage: storageConfig,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilterConfig
    })

    upload.single('image')(req, res, function (err) {
        if (err) {
            return res.status(400).send({ message: "File upload error", error: err.message });
        }
        if (!req.file) {
            return res.status(400).send({ message: "No file uploaded or invalid file type" });
        }
        req['body'] = {}
        req['body'] = { ...data, url: req.file.path }
        
        next()
    });

}

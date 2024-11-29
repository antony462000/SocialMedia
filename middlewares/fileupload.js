const multer = require("multer")
const path = require("node:path")
module.exports = (uploadType = "single", filename = "image", maxCount = 5) => {

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

    return (req, res, next) => {
        const userId = req.body.userId
        const uploader = uploadType === "single"
            ? upload.single(filename)
            : upload.array('image', 5);


        uploader(req, res, function (err) {
            if (err) {

                return res.status(400).send({ message: "File upload error", error: err.message });
            }

            if (uploadType === "single") {
                if (!req.file) {

                    return res.status(400).send({ message: "No file uploaded or invalid file type" });
                }
                req.body = { ...req.body, url: req.file.path };
            } else {

                if (!req.files || req.files.length === 0) {
                    return res.status(400).send({ message: "No files uploaded or invalid file types" });
                }

                req.body = { ...req.body, userId, urls: req.files.map((file) => file.path) };
            }
            next()
        });
    }
}


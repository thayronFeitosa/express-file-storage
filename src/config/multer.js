const multer = require('multer');
const path = require('path');
const crypto = require("crypto");

const tpmFolder = path.resolve(__dirname, '..', '..', 'tmp','uploads')

module.exports = {
  directory: tpmFolder,
  storage: multer.diskStorage({
		destination: tpmFolder,
		filename(request, file, callback) {
      console.log(file);
			const fileHash = crypto.randomBytes(10).toString('hex');
			const fileName = `${fileHash}-${file.originalname}`;

			return callback(null, fileName);
		},
	}),
}
// module.exports = {
//   dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
//   storege: multer.diskStorage({
//     destination: () => {
//       cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
//     },
//     filename: (req, file, cb) => {
//       console.log(file.originalname);
//       crypto.randomBytes(16, (err, hash) => {
//         if (err) cb(err);
//         const fileHash = crypto.randomBytes(10).toString('hex');
//         const fileName = `${fileHash}-${file.originalname}`;
//         cb(null, fileName)
//       });
//     }
//   }),
//   limits: {
//     fileSize: 2 * 1024 * 1024
//   },
//   fileFilter: (req, file, cb) => {
//     const allowedMimes = [
//       'image/jpeg',
//       'image/png',
//       'image/pjpeg',
//       'image/gif'
//     ]
//     if (allowedMimes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type'))
//     }
//   }
// };

const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

const tpmFolder = path.resolve(__dirname, '..', '..', 'tmp')

module.exports = {
  directory: tpmFolder,
  storage: multer.diskStorage({
		destination: tpmFolder,
		filename(request, file, callback) {
			const fileHash = crypto.randomBytes(10).toString('hex');
			const fileName = `${fileHash}-${file.originalname}`;

			return callback(null, fileName);
		},
	}),
}
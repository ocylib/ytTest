const yt = require('ytcog');
const fs = require('fs');

(async () => {
	const session = new yt.Session();
	await session.fetch();
	const writer = fs.createWriteStream('log.txt', { flags: 'a' });
	if (session.status === 'OK') {
		const log = Date() + ' ' + session.playerUrl + '\n';
		writer.write(log);
	} else {
		writer.write('fail……\n');
	}
	writer.end();
})();

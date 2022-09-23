import yt from 'ytcog';
import got from 'got';
(async () => {
	const session = new yt.Session();
	const url =
		'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=c6f3ebeb-a18b-4ca1-8622-1adab41cb6c3';
	const msg = {
		msgtype: 'markdown',
		markdown: {
			content: '出错了',
		},
	};
	await session.fetch();
	if (session.status === 'OK') {
		const { key, sts, player, playerUrl } = session;
		msg.markdown.content = `\n>time: ${new Date().getHours()}\n>key: ${key}\n>sts: ${sts}\n>ncodeFn: ${player.ncodeFn
			.toString()
			.slice(200, 220)}\n>url: ${playerUrl}`;
	}
	await got.post(url, { json: msg });
})();

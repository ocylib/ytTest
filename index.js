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
		const { key, sts, id_token, session_token, playerUrl } = session;
		msg.markdown.content = `\n>key: ${key}\n>sts: ${sts}\n>id_token: ${id_token}\n>session_token: ${session_token}\n>playerUrl: ${playerUrl}`;
	}
	await got.post(url, { json: msg });
})();

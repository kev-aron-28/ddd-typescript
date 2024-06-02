import { MoocBackendApp } from './MoocBackendApp';

try {
	void new MoocBackendApp().start();
} catch (e) {
	// eslint-disable-next-line no-console
	console.log(e);
	process.exit(1);
}

process.on('uncaughtException', err => {
	// eslint-disable-next-line no-console
	console.log('uncaughtException', err);
	process.exit(1);
});

import type { Request } from '@sveltejs/kit';
const API_KEY = import.meta.env.VITE_GOOGLE_APPLICATION_CREDENTIALS;

export async function post(req: Request) {
	try {
		const body = req.body;

		const response = await fetch(
			`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(body)
			}
		);

		return { status: response.status, body: await response.json() };
	} catch (error) {
		console.error(error);
	}
}

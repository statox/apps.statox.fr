import { PUBLIC_API_URL } from '$env/static/public';
import { getAccessToken } from '$lib/auth/service';

interface GetOptions {
    path: string;
    authorize?: true;
}

export const requestAPIGet = async <ResponseType>(options: GetOptions): Promise<ResponseType> => {
    const { path } = options;

    if (!path.length || path[0] !== '/') {
        throw new Error('Malformed path');
    }

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    if (options.authorize) {
        const token = await getAccessToken();
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${PUBLIC_API_URL}${path}`, {
        method: 'GET',
        mode: 'cors',
        headers
    });
    if (response.status < 200 || response.status >= 300) {
        throw new Error(await response.text());
    }

    return response.json();
};

interface PostOptions {
    path: string;
    data: unknown;
}
export const requestAPIPost = async <ResponseType>(
    options: PostOptions
): Promise<ResponseType | void> => {
    const token = await getAccessToken();
    const { path, data } = options;

    if (!path.length || path[0] !== '/') {
        throw new Error('Malformed path');
    }

    const body = JSON.stringify(data);

    const response = await fetch(`${PUBLIC_API_URL}${path}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body
    });

    if (response.status < 200 || response.status >= 300) {
        throw new Error(await response.text());
    }

    try {
        return await response.json();
    } catch (error) {
        console.error('Error while trying to parse response from ' + path);
        console.error(error);
        return Promise.resolve();
    }
};

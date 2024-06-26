import { getSongbook } from '$lib/Songbook/api';
import type { Chord } from '$lib/Songbook/types';
import type { PageLoad } from './$types';

export const ssr = false; // Avoid calling API's /chords/getAll at build time
export const load: PageLoad = async (): Promise<{ chords: Chord[] }> => {
    const chords = await getSongbook();
    return { chords };
};

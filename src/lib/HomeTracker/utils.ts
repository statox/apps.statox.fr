import { DateTime } from 'luxon';

// Temporary hack because some records were created with a timestamp as
// an iso string. In the future we want to update these records or just delete them
const parseRecordTimestamp = (ts: number | string) => {
    if (typeof ts === 'number') {
        if (ts < 9000000000) {
            return DateTime.fromSeconds(ts);
        }
        return DateTime.fromMillis(ts);
    }
    if (typeof ts === 'string') {
        return DateTime.fromISO(ts);
    }
    throw new Error('Cant parse record timestamp');
};

export const formatRecordTimestampToMillis = (ts: number) => {
    try {
        const time = parseRecordTimestamp(ts);
        return time.toMillis();
    } catch (error) {
        // console.log('Error parsing TS', ts);
        // console.error(error);
        return;
    }
};

export const formatRecordTimestampToHuman = (ts: number) => {
    try {
        const time = parseRecordTimestamp(ts);
        if (time.hasSame(DateTime.now(), 'day')) {
            return time.toFormat('HH:mm');
        }

        return time.toFormat('dd/MM HH:mm');
    } catch (error) {
        // console.log('Error parsing TS', ts);
        // console.error(error);
        return;
    }
};

export const formatRecordTimestampToHumanWithSeconds = (ts: number) => {
    try {
        const time = parseRecordTimestamp(ts);
        if (time.hasSame(DateTime.now(), 'day')) {
            return time.toFormat('HH:mm:ss');
        }

        return time.toFormat('dd/MM HH:mm:ss');
    } catch (error) {
        // console.log('Error parsing TS', ts);
        // console.error(error);
        return;
    }
};

export const formatRecordTimestampToRelative = (ts: number) => {
    try {
        const time = parseRecordTimestamp(ts);
        return time.toRelative();
    } catch (error) {
        // console.log('Error parsing TS', ts);
        // console.error(error);
        return;
    }
};

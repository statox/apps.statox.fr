export const musicSection = {
    name: 'Music',
    apps: [
        {
            name: 'Song Book',
            description: 'The list of my guitar tablatures',
            link: '/songbook'
        },
        {
            name: 'Metronome',
            description: 'Never miss a beat',
            link: '/metronome'
        },
        {
            name: 'Scales',
            description: 'A tool to visualize music scales and common chords progressions',
            link: '/scales'
        },
        {
            name: 'Chord Wheel',
            description: 'A tool to find the key of a song and work with scale degrees',
            link: '/chordwheel'
        },
        {
            name: 'Tap Tempo',
            description: 'Find a tempo by tapping it on the screen or the keyboard',
            link: '/taptempo'
        }
    ]
};

export const utilsSection = {
    name: 'Utils',
    apps: [
        {
            name: 'Notes',
            description: 'A list of notes for stuff I keep forgetting',
            link: '/notes'
        },
        {
            name: 'Clipboard',
            description: 'My universal clipboard',
            link: '/clipboard'
        },
        {
            name: 'About',
            description: 'The about section of this website',
            link: '/about'
        }
    ]
};

export const allApps = [utilsSection, musicSection];

<script lang="ts">
    import { HeadIOS } from '$lib/components/HeadIOS';
    import Beats from './components/Beats.svelte';
    import TempoList from './components/TempoList.svelte';
    import { TapTempo } from '$lib/TapTempo';
    import { pageNameStore } from '$lib/components/Header';

    pageNameStore.set('Tap Tempo');

    let tapTempo = $state(new TapTempo());
    let taped = $state(false);

    const addBeat = () => {
        if (pause) {
            return;
        }
        tapTempo.addBeat();
        tapTempo = tapTempo;

        taped = true;
        setTimeout(() => (taped = false), 100);
    };

    const reset = () => {
        tapTempo.reset();
        tapTempo = tapTempo;
    };

    let pause = $state(false);

    let keyReleased = true;
    const onKeyDown = (e: KeyboardEvent) => {
        const SPACE = ' ';
        const ENTER = 'Enter';
        const C = 'c';
        const allowedKeys = [SPACE, ENTER, C];
        if (!allowedKeys.includes(e.key)) {
            return;
        }
        e.preventDefault();
        if (!keyReleased) {
            return;
        }
        keyReleased = false;
        if (e.key === SPACE) {
            pause = false;
            addBeat();
            return;
        }
        if (e.key === ENTER) {
            pause = !pause;
            return;
        }
        if (e.key === C) {
            reset();
            tapTempo = tapTempo;
        }
    };

    const onKeyUp = (e: KeyboardEvent) => {
        const SPACE = ' ';
        if (!keyReleased && e.key === SPACE) {
            keyReleased = true;
            e.preventDefault();
        }
    };
</script>

<HeadIOS title="TapTempo" description="Tap Tempo Metronome" iconPath="/tap_tempo.png" />

<div class="container">
    <div>Press the space bar or click/tap anywhere on the page to get a bpm.</div>

    <div class="bpm" class:tapped={taped}>{tapTempo.bpm}<br />BPM</div>

    <div class="controls">
        <button class="control-button" onclick={reset}>Reset (c)</button>
        <button class="control-button" onclick={() => (pause = !pause)}>
            {pause ? 'Play' : 'Pause'} (Enter)
        </button>
    </div>

    <Beats taps={tapTempo.taps} keptDuration={tapTempo.keptDuration} {pause} />

    <TempoList currentBpm={tapTempo.bpm} />
</div>

<svelte:window onkeydown={onKeyDown} onkeyup={onKeyUp} onpointerdown={addBeat} />

<style>
    .container {
        /* Prevent selection to avoid highlighting content when using the mouse to tap the tempo */
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }
    .controls {
        display: flex;
        flex-wrap: wrap;
    }
    .control-button {
        flex: 1 0 40%;
        list-style-type: none;
        margin: 0.1em;
    }
    @media screen and (max-width: 400px) {
        .bpm {
            font-size: 6em;
        }
    }
    @media screen and (min-width: 400px) and (max-width: 600px) {
        .bpm {
            font-size: 9em;
        }
    }
    @media screen and (min-width: 600px) {
        .bpm {
            font-size: 12em;
        }
    }
    .bpm {
        text-align: center;
        font-weight: 500;
    }
    .tapped {
        background-color: var(--nc-bg-2);
    }
</style>

<script lang="ts">
    import { getLinksVisitsCount } from '$lib/Songbook/api';
    import { openModal } from '$lib/components/Modal';
    import { BackToTop } from '$lib/components/BackToTop';
    import { HeadIOS } from '$lib/components/HeadIOS';
    import {
        ListByAccessDate,
        ListByArtist,
        ListByTags,
        ListByVisitsCounts
    } from './components/views';
    import ChordsChecks from './components/ChordsChecks.svelte';
    import LatestAdditions from './components/LatestAdditions.svelte';
    import RandomSongs from './components/RandomSongs.svelte';
    import type { Chord, ChordVisitItem, Filters, FilterType } from '$lib/Songbook/types';
    import { onMount } from 'svelte';
    import { visitCountsStore } from './store';
    import { getTypeIconClass } from './utils';
    import { goto } from '$app/navigation';
    import { toast } from '$lib/components/Toast';

    // From +page.ts load() function
    export let data: { chords: Chord[] };
    const { chords } = data;

    onMount(async () => {
        try {
            const countsData = await getLinksVisitsCount();
            const counts = countsData.reduce(
                (counts: Map<string, ChordVisitItem>, count: ChordVisitItem) => {
                    counts.set(count.url, {
                        ...count
                    });
                    return counts;
                },
                new Map()
            );

            visitCountsStore.set(counts);
        } catch (error) {
            const message = `<strong>Couldn't get visits count</strong><br/> ${
                (error as Error).message
            }`;
            toast.push(message, {
                duration: 0,
                theme: {
                    '--toastBarBackground': '#FF0000'
                }
            });
        }
    });

    let searchString = '';

    const views = [
        { label: 'By artist', component: ListByArtist },
        { label: 'By tags', component: ListByTags },
        { label: 'By frequency', component: ListByVisitsCounts },
        { label: 'By access date', component: ListByAccessDate }
    ];
    let currentView = views[0];

    let filters: Filters = {
        pdf: true,
        doc: true,
        youtube: true,
        link: true
    };
    const filtersKey: FilterType[] = Object.keys(filters) as FilterType[];
</script>

<HeadIOS title="Song Book" description="My song book" iconPath="/songbook.png" />

<h2>
    Song book
    <span class="pull-right">
        <button style:position="relative" on:click={() => openModal(ChordsChecks)}>
            Check dead links
        </button>

        <button style:position="relative" on:click={() => goto('/songbook/edit')}> Edit </button>
    </span>
</h2>

<BackToTop />

<p>
    This is a list of {chords.length} song chords I have been gathering for the past 10 years and that
    I like to play.
</p>

<LatestAdditions {chords} />
<RandomSongs {chords} />

<div>
    <h3>All songs</h3>
    Search an artist, a title or a tag:<input type="text" bind:value={searchString} />
    <button on:click={() => (searchString = '')}>
        <i class="fas fa-times-circle"></i>
    </button>

    <div class="filter-controls-container">
        <h4>Filters</h4>
        {#each filtersKey as filter}
            <button
                class="filter-control"
                on:click={() => {
                    filters[filter] = !filters[filter];
                    filters = filters;
                }}
            >
                <input id={filter} type="checkbox" bind:checked={filters[filter]} />
                <span class={getTypeIconClass(filter)}></span>
            </button>
        {/each}
    </div>

    <h4>View</h4>
    <div class="view-controls-container">
        {#each views as option}
            <button
                class="control"
                class:selected={currentView === option}
                on:click={() => (currentView = option)}
            >
                {option.label}
            </button>
        {/each}
    </div>
</div>

<svelte:component this={currentView.component} {chords} {searchString} {filters} />

<style>
    .view-controls-container {
        display: flex;
        justify-content: space-around;
    }
    .filter-controls-container {
        display: flex;
        justify-content: space-around;
    }

    .control {
        flex-grow: 1;
    }

    .filter-control {
        flex-grow: 1;
        background: none;
    }

    @media screen and (max-width: 750px) {
        .view-controls-container {
            flex-direction: column;
            gap: 0.3em;
        }
    }
    @media screen and (min-width: 750px) {
        .view-controls-container {
            flex-direction: row;
            gap: 1em;
        }
    }

    button.selected {
        background-color: var(--nc-lk-2);
        font-weight: bold;
    }

    .fa-file-word {
        color: #1d5af4;
    }

    .fa-file-pdf {
        color: #e82236;
    }

    .fa-link {
        color: #727171;
    }
</style>

<script lang="ts">
    import { run } from 'svelte/legacy';

    import { toast } from '$lib/components/Toast';
    import { PUBLIC_API_URL } from '$env/static/public';
    import { type ReactorEntryForPublic } from '$lib/Reactor/types';

    interface Props {
        reactions: ReactorEntryForPublic[];
    }

    let { reactions }: Props = $props();
    const pageSize = 10;
    let page = $state(1);
    let displayedReactions: ReactorEntryForPublic[] = $state([]);

    let searchString = $state('');

    const matchSearch = (entry: ReactorEntryForPublic, searchString: string) => {
        if (!searchString.length) {
            return true;
        }

        const formatedName = entry.name.toLowerCase();
        if (formatedName.includes(searchString.toLowerCase())) {
            return true;
        }

        for (const tag of entry.tags) {
            const formatedTag = tag.toLowerCase();
            if (formatedTag.includes(searchString.toLowerCase())) {
                return true;
            }
        }

        return false;
    };

    const copyEntryUrlToClipboard = (entry: ReactorEntryForPublic) => {
        navigator.clipboard.writeText(PUBLIC_API_URL + entry.uri);
        toast.push('<i class="fas fa-check"></i> Link copied to clipboard', {
            duration: 1000,
            theme: {
                '--toastBarHeight': 0
            }
        });
    };

    const isVideoEntry = (entry: ReactorEntryForPublic) => {
        return entry.s3PresignedUrl.includes('.mp4');
    };

    run(() => {
        displayedReactions = reactions
            .filter((entry) => matchSearch(entry, searchString))
            .sort((a, b) => b.creationDateUnix - a.creationDateUnix)
            .slice(0, searchString.length ? undefined : page * pageSize);
    });
</script>

<input
    class="full-width medium-margin"
    type="text"
    placeholder="Search by tags or name"
    bind:value={searchString}
/>

<div class="container">
    {#each displayedReactions as entry}
        <div>
            <div><b>{entry.name}</b></div>
            <div>
                {#each entry.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
            <div>
                <button class="full-width" onclick={() => copyEntryUrlToClipboard(entry)}>
                    <i class="fas fa-copy"></i>
                    Copy link
                </button>
            </div>
        </div>
        <div>
            <a
                href={PUBLIC_API_URL + entry.uri}
                download={entry.name}
                rel="noopener noreferrer"
                target="blank"
            >
                {#if isVideoEntry(entry)}
                    <!-- svelte-ignore a11y_media_has_caption -->
                    <video
                        class="medium-margin"
                        style="max-width: 100%"
                        controls
                        src={PUBLIC_API_URL + entry.uri}
                    ></video>
                {:else}
                    <img class="medium-margin" src={PUBLIC_API_URL + entry.uri} alt={entry.name} />
                {/if}
            </a>
        </div>
    {/each}
</div>

{#if searchString.length === 0 && page * pageSize < reactions.length}
    <button class="full-width medium-margin" onclick={() => page++}>More...</button>
{/if}

<style>
    .container {
        display: grid;
        row-gap: 1em;
    }

    .tag {
        margin: 0.3em;
        padding: 0.3em;
        background-color: var(--nc-bg-2);
        color: var(--nc-tx-1);
        border-radius: 5px;
    }

    div > .tag:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }

    .full-width {
        width: 100%;
    }
    .medium-margin {
        margin: 1em;
    }

    @media screen and (max-width: 750px) {
        .container {
            grid-template-columns: 100%;
        }
    }
    @media screen and (min-width: 750px) {
        .container {
            grid-template-columns: auto 1fr;
        }
    }
</style>

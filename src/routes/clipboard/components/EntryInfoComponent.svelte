<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { user } from '$lib/auth/service';
    import { deleteClipboardEntry } from '$lib/Clipboard/api';
    import type { ClipboardEntryEnriched } from '$lib/Clipboard/types';
    import ExpirationInfo from './ExpirationInfo.svelte';

    export let entry: ClipboardEntryEnriched;
    const dispatch = createEventDispatcher();

    const deleteEntry = (name: string) => {
        deleteClipboardEntry(name).then((_response) => dispatch('delete'));
    };
</script>

<div class="info-container">
    <ExpirationInfo {entry} />

    {#if $user}
        <button class="visibility-status" class:visibility-public={entry.isPublic} disabled>
            {#if entry.isPublic}
                <i class="fas fa-lock-open"></i>
            {:else}
                <i class="fas fa-lock"></i>
            {/if}
        </button>

        <button class="delete-button" on:click={() => deleteEntry(entry.name)}>
            <i class="fas fa-trash-alt"></i>
        </button>
        <div class="creation-date">{entry.formatedCreationDate}</div>
    {/if}
</div>

<style>
    .info-container {
        display: flex;
        flex-direction: row;
        gap: 10px 10px;
        justify-content: flex-start;
        align-items: baseline;
        margin-right: 10px;
    }
    .visibility-status {
        height: 33px;
        width: 40px;
        background-color: #07a761;
    }
    .visibility-public {
        background-color: #ff8f00;
    }
    .delete-button {
        height: 33px;
        background: red;
        color: white;
        width: 40px;
    }
    .creation-date {
        width: max-content;
    }
</style>

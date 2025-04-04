<script lang="ts">
    import { JSONEditor, Mode, createAjvValidator } from 'svelte-jsoneditor';
    import type { JSONContent } from 'svelte-jsoneditor';
    import { modals } from 'svelte-modals';
    import { ApiError } from '$lib/api';
    import { UserLoggedOutError } from '$lib/auth';
    import { user } from '$lib/auth/service';
    import { toast } from '$lib/components/Toast';
    import NewChordModal from './components/NewChordModal.svelte';
    import type { RawChord } from '$lib/Songbook/types';
    import { uploadChords } from '$lib/Songbook/api';

    import { goto } from '$app/navigation';
    import { Notice } from '$lib/components/Notice';

    // TODO Migrate this component to svelte 5

    // From +page.ts load() function
    export let data: { chords: RawChord[] };
    let { chords } = data;
    let content = {
        json: chords
    };

    const schema = {
        type: 'array',
        items: {
            type: 'object',
            required: ['artist', 'title', 'url', 'creationDate', 'tags'],
            additionalProperties: false,
            properties: {
                artist: {
                    type: 'string'
                },
                title: {
                    type: 'string'
                },
                url: {
                    type: 'string'
                },
                creationDate: {
                    type: 'number'
                },
                tags: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    };

    const validator = createAjvValidator({ schema });
    let editor: JSONEditor;

    let isValid = true;
    const onJsonChange = () => {
        if (editor.validate()) {
            isValid = false;
            return;
        }
        isValid = true;
    };

    const upload = async () => {
        if (editor.validate()) {
            return;
        }

        try {
            const content = editor.get() as JSONContent;
            await uploadChords(content.json as RawChord[]);
            toast.push('<i class="fas fa-check"></i> Uploaded');
        } catch (error) {
            let errorMessage = (error as Error).message;
            if (error instanceof ApiError && error.code === 401) {
                errorMessage = 'Invalid logged in user';
            } else if (error instanceof UserLoggedOutError) {
                errorMessage = 'User is logged out';
            }
            const message = `<strong>Upload failed</strong><br/> ${errorMessage}`;
            toast.push(message, {
                theme: {
                    '--toastBarBackground': '#FF0000'
                }
            });
        }
    };

    const onNewSongSubmit = async (params: {
        title: string;
        artist: string;
        url: string;
        tags: string[];
    }) => {
        const now = Date.now();
        chords = [{ ...params, creationDate: now }, ...chords];

        try {
            await uploadChords(chords);
            modals.close();
            content = { json: chords };
            toast.push('<i class="fas fa-check"></i> Uploaded');
        } catch (error) {
            const message = `<strong>Entry not created</strong><br/> ${(error as Error).message}`;
            toast.push(message, {
                duration: 0,
                theme: {
                    '--toastBarBackground': '#FF0000'
                }
            });
        }
    };
</script>

<h2>
    Edit song book

    <span class="pull-right">
        <button style:position="relative" on:click={() => goto('/songbook')}>
            Back to songbook
        </button>
    </span>
</h2>

{#if $user}
    <button
        style:position="relative"
        on:click={() => modals.open(NewChordModal, { onNewSongSubmit })}
    >
        Add a song
    </button>
{/if}

{#if chords?.length}
    {#if isValid}
        {#if $user}
            <button on:click={upload}>Upload</button>
        {:else}
            <span><Notice item={{ level: 'info', header: 'Login to upload changes' }} /></span>
        {/if}
    {/if}
    <div class="json-editor jse-theme-dark" style="width: 100%">
        <JSONEditor
            bind:this={editor}
            bind:content
            mode={Mode.table}
            mainMenuBar={true}
            {validator}
            onChange={onJsonChange}
        />
    </div>
{/if}

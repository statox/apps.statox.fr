<script lang="ts">
    import type { ClipboardEntryEnriched } from '$lib/Clipboard/types';

    interface Props {
        entry: ClipboardEntryEnriched;
    }

    let { entry }: Props = $props();
</script>

<div class={entry.expirationStatus} title={entry.formatedExpirationDate}>
    <i class="fas fa-circle"></i>
</div>

<style>
    .expired {
        color: grey;
    }
    .very_soon {
        color: red;
    }
    .soon {
        color: orange;
    }
    .not_soon {
        color: green;
    }
</style>

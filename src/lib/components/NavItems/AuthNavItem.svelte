<script lang="ts">
    import { login, logout, user } from '$lib/auth/service';
</script>

{#key $user}
    {#if $user}
        <button title="Log out" onclick={() => logout()}>
            <img class="user-profile" alt="user profile" src={$user.picture} />
        </button>
    {:else}
        <button aria-label="log in" title="Log in" type="button" onclick={() => login()}>
            <i class="fa fa-sign-in" aria-hidden="true"></i>
        </button>
    {/if}
{/key}

<style>
    button {
        background: none;
        color: var(--nc-lk-1);
        padding: 0;
    }
    button:hover {
        background: none;
        color: var(--nc-lk-2);
    }
    .fa {
        font-size: 1.5em;
    }

    .user-profile {
        display: inline;
        margin: 0;
        height: 1.5em;
        width: 1.5em;
    }
</style>

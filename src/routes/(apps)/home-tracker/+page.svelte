<script lang="ts">
    import { HeadIOS } from '$lib/components/HeadIOS';
    import { pageNameStore } from '$lib/components/Header';
    import SensorsSummary from './components/SensorsSummary.svelte';
    import SensorsHistogram from './components/SensorsHistogram.svelte';
    import WeatherForecast from './components/WeatherForecast.svelte';
    import TimeControls from './components/TimeControls.svelte';

    pageNameStore.set('Home Tracker');
</script>

<HeadIOS title="Home Tracker" description="Recording of my sensors" iconPath="/hometracker.png" />

<div class="content">
    <TimeControls />
    <SensorsSummary />
    <SensorsHistogram />
    <WeatherForecast />
</div>

<style>
    .content {
        display: flex;
        flex-flow: column;
        row-gap: 2em;
    }
</style>

import type { LunarPhase } from 'lunarphase-js';

export interface SensorState {
    sensorName: string;
    iconPath: string;
    rgbColor: { r: number; g: number; b: number };
    lastLogData: SensorLogData;
}

// This should replace SensorState once calls to getAllSensorsWithLatestLog are completley removed
export interface DashboardSensorState {
    sensorName: string;
    iconPath: string;
    hexColor: string;
    lastSyncDateUnix: number;
    lastAlertDateUnix: number;
    lastLogData: SensorLogData;
    oneHourAgoLogData: SensorLogData;
}

export interface HomeTrackerSensorsResponse {
    sensors: SensorState[];
}

export interface HomeTrackerLatestResponse {
    histogramData: HomeTrackerHistogramData;
    sensorNames: string[];
}

export interface HomeTrackerTimeData {
    tempCelsius?: {
        [sensorName: string]: number;
    };
    internalTempCelsius?: {
        [sensorName: string]: number;
    };
    batteryCharge?: {
        [sensorName: string]: number;
    };
    humidity?: {
        [sensorName: string]: number;
    };
    internalHumidity?: {
        [sensorName: string]: number;
    };
    pressurehPa?: {
        [sensorName: string]: number;
    };
}

export interface HomeTrackerHistogramData {
    [timestamp: number]: HomeTrackerTimeData;
}

export interface SensorLogData {
    timestamp: number;
    sensorName: string;

    batteryCharge?: number;
    batteryPercent?: number;
    detectedForcedReset?: boolean;
    detectedInternalSensorFailure?: boolean;
    detectedLowBattery?: boolean;
    detectedSensorFailure?: boolean;
    humidity?: number;
    internalHumidity?: number;
    internalTempCelsius?: number;
    pressurehPa?: number;
    tempCelsius?: number;
    timeToSendMs?: number;
}

export type TimeWindowPublic = '30m' | '3h' | '12h' | '1d' | '3d' | '7d' | '2w';

export type TimeWindow = TimeWindowPublic | '6M' | 'alltime';

type Trend = 'falling' | 'rising' | 'steady';
export interface WeatherForecast {
    pressureTrend: Trend;
    forecast: string;
    dataPoints?: {
        oldest: {
            timestampMs: number;
            pressurehPa: number;
        };
        latest: {
            timestampMs: number;
            pressurehPa: number;
        };
    };
}

export interface PressureHistoryItem {
    timestamp: number;
    averagePressurehPa: number;
}

enum LunarPhaseFrench {
    NEW = 'Nouvelle lune',
    WAXING_CRESCENT = 'Premier croissant',
    FIRST_QUARTER = 'Premier quartier',
    WAXING_GIBBOUS = 'Gibeuse croissante',
    FULL = 'Pleine lune',
    WANING_GIBBOUS = 'Gibeuse décroissante',
    LAST_QUARTER = 'Last Quarter',
    WANING_CRESCENT = 'Dernier croissant'
}

interface MoonState {
    lunarAge: number;
    lunarAgePercent: number;
    moonPhase: LunarPhase;
    moonPhaseFr: LunarPhaseFrench;
    moonVisibilityWindow: string[];
}

export type EnrichedMoonState = MoonState & {
    phasePictureUrl: string;
};

export interface Ephemerides {
    sunState: {
        sunrise: number;
        sunset: number;
        solarNoon: number;
        goldenHour: number;
        dayLengthMs: number;
        dayLengthDiffMs: number;
    };
    moonState: MoonState;
    upcomingLunarStates: {
        tsMillis: number;
        lunarState: MoonState;
    }[];
}

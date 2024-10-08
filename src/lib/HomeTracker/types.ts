export interface SensorState {
    sensorName: string;
    iconPath: string;
    rgbColor: { r: number; g: number; b: number };
    lastLogTimestamp: number;
    lastLogData: SensorLogData;
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

export type TimeWindow =
    | '30m'
    | '3h'
    | '12h'
    | '1d'
    | '3d'
    | '7d'
    | '2w'
    | '1M'
    | '2M'
    | '6M'
    | 'alltime';

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

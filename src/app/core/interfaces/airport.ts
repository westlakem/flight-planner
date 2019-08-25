import { Runway } from './runway'
export interface Airport {
    id: string;
    Altitude: number;
    City: string;
    Country: string;
    File: string;
    ICAOName: string;
    Latitude: number;
    Longitude: number;
    MagVar: number;
    Runway: Array<Runway>;
    SceneryName: string;
    State: string;
}

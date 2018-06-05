import { Highlight } from './highlight';

export class Activity {
    public name: string;
    public isOngoing: boolean;
    public from: Date;
    public to: Date;
    public personalSignificance: string;
    public highlights: Highlight[];
}

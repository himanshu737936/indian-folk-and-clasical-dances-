export interface ClassicalDance {
  name: string;
  origin: string;
  feature: string;
  artist: string;
  element?: string;
}

export interface FolkDance {
  region: string;
  dances: string[];
}

export interface DanceData {
  classical: ClassicalDance[];
  folk: FolkDance[];
}

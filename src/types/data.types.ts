// Generated with https://typegen.vestera.as/
// And modified to use the proper geojson typings

import type { FeatureCollection, Point } from 'geojson';

export interface RootData {
  site: SiteData;
  profile: ProfileData;
  data: EarthquakeData;
}

export interface SiteData {
  title: string;
  heroImage: string;
  logoImage: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  avatarImage: string;
  phone: string;
  email: string;
  bio: string;
}

export interface EarthquakeData extends FeatureCollection<Point, Properties> {
  metadata: Metadata;
}

export interface Metadata {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}

export interface Properties {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: number;
  url: string;
  detail: string;
  felt: number | null;
  cdi: number | null;
  mmi: null;
  alert: null;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst?: number;
  dmin?: number;
  rms: number;
  gap?: number;
  magType: string;
  type: string;
  title: string;
}

export interface ServiceValue{
    name: string;
    external_urls: ExternalUrl;
    images: SongCover[];
}

interface ExternalUrl {
  spotify: string
}

interface SongCover {
  height: number;
  url: string;
  width: number;
}

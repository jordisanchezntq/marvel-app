interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    resourceURI: string;
    comics: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
      }[];
      returned: number;
    };
    series: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
      }[];
      returned: number;
    };
    stories: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
        type: string;
      }[];
      returned: number;
    };
    events: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
      }[];
      returned: number;
    };
    urls: {
      type: string;
      url: string;
    }[];
  }
  
  export interface MarvelResponse {
    data: {
      results: MarvelCharacter[];
    };
  }
  
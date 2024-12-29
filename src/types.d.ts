export interface GameDetails {
  developer: string;
  release_date: string;
  platform: string;
}

export interface Game {
  title: string;
  id: string;
  price: number;
  description: string;
  rating: number;
  images: string[];
  details: GameDetails;
  categories: string[];
}

export interface ConsoleGame {
  name: string;
  id: string;
  price: number;
  images: string[];
  games: Game[];
}
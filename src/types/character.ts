export type Character = {
  name: string
  gender: string
  mass: string
  eye_color: string
  height: string
  hair_color: string
  url: string
};

export type CharacterResponse = {
  count: number
  results: Character[]
};


export interface Trouble {
  h3: string;
  p: string[];
}

export interface Project {
  id: string;
  sort: string;
  type: string;
  title: string;
  type2: string;
  date: string;
  skill: string;
  function: string;
  url: string;
  git: string;
  thumb: string;
  work: string;
  etc: string;
  img: string[];
  background: string;
  contents: Trouble[];
}

export interface Data {
  data: Project[];
}
export type HomepageContent = {
  content: {
    hero: Hero;
    perks: Perks;
    CTA: Cta;
  };
};

export type Cta = {
  text: string;
  button: string;
};

export type Hero = {
  title: string;
  subtitle: string;
  image: string;
};

export type Perks = {
  title: string;
  subtitle: string;
  image: string;
  perks: Perk[];
};

export type Perk = {
  title: string;
  description: string;
};

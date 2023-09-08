import _ from "lodash";
import type { Project } from "~/types/project";
import secretSantaLogo from "~/assets/secret-santa-logo.png";
import secretSantaBrand from "~/assets/secret-santa-brand.png";
import pokedexTitleImage from "~/assets/pokedex.png";

// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
  return useState<Project[]>("foo", () =>
    _.sortBy(
      [
        {
          id: "pokedex",
          description: "Pokedex concept for PokeAPI.",
          href: "https://pokedex.leman.dev",
          style: {
            color: "#fddf00",
            backgroundColor: "#295ebb",
          },
          brandUrl: pokedexTitleImage,
          logoUrl:
            "https://raw.githubusercontent.com/josempineiro/pokedex/main/public/icons/Pokedex.svg",
          technologies: [
            "nuxt",
            "vue",
            "javascript",
            "sass",
            "github",
            "vercel",
          ],
        },
        {
          id: "promilsim",
          title: "Promilsim",
          description: "Find airsoft teams, matches and more!",
          href: "https://promilsim.com/app",
          logoUrl: "https://promilsim.com/images/airsoft-2.jpg",
          class: "logo-rounded",
          style: {
            backgroundColor: "#2d2d2d",
            color: "#ffffff",
          },
          technologies: [
            "next",
            "react",
            "typescript",
            "materialui",
            "github",
            "vercel",
          ],
        },
        {
          id: "secretsanta",
          description:
            "Invite your friends or family to join and exchange gifts.",
          href: "https://secretsanta.leman.dev/",
          logoUrl: secretSantaLogo,
          brandUrl: secretSantaBrand,
          class: "rounded",

          style: {
            backgroundColor: "#2d2d2d",
            color: "#ffffff",
          },
          technologies: [
            "next",
            "react",
            "typescript",
            "tailwind",
            "github",
            "vercel",
          ],
        },
        {
          id: "rick-and-morty",
          description: "Memorize game using Rick and Morty API.",
          href: "https://rick-and-morty.leman.dev/game",
          logoUrl:
            "https://rick-and-morty.leman.dev/icons/apple-touch-icon.png",
          brandUrl: "https://rick-and-morty.leman.dev/logo.svg",
          class: "logo-rounded",
          style: {
            backgroundColor: "#0c0e0c",
            color: "#ffffff",
          },
          technologies: [
            "next",
            "react",
            "typescript",
            "tailwind",
            "apollographql",
            "graphql",
            "github",
            "vercel",
          ],
        },
        {
          id: "minecraft-ui",
          description: "UI which Mojand Studios wishes to had and haven't.",
          href: "https://minecraft-ui.leman.dev/",
          brandUrl: "https://minecraft-ui.leman.dev/images/brand.png",
          class: "rounded",
          style: {
            backgroundColor: "rgb(35, 35, 42)",
            color: "white",
          },
          technologies: [
            "react",
            "typescript",
            "css",
            "rollup",
            "storybook",
            "github",
            "vercel",
          ],
        },
      ],
      "id"
    )
  );
}

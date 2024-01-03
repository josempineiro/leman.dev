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
          title: "Pokedex",
          description: "Pokedex concept for PokeAPI.",
          href: "https://pokedex.leman.dev",
          style: {
            text: "#fddf00",
            color: "#295ebb",
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
          href: "https://promilsim.leman.dev/app",
          logoUrl: "https://promilsim.leman.dev/images/airsoft-2.jpg",
          class: "logo-rounded",
          style: {
            color: "#2d2d2d",
            text: "#ffffff",
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
          title: "Secret Santa",
          description:
            "Invite your friends or family to join and exchange gifts.",
          href: "https://secretsanta.leman.dev/",
          logoUrl: secretSantaLogo,
          brandUrl: secretSantaBrand,
          class: "rounded",

          style: {
            color: "#2d2d2d",
            text: "#ffffff",
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
          title: "Rick and Morty",
          description: "Memorize game using Rick and Morty API.",
          href: "https://rick-and-morty.leman.dev/game",
          logoUrl:
            "https://rick-and-morty.leman.dev/icons/apple-touch-icon.png",
          brandUrl: "https://rick-and-morty.leman.dev/logo.svg",
          class: "logo-rounded",
          style: {
            color: "#0c0e0c",
            text: "#ffffff",
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
          title: "Minecraft UI",
          description: "UI which Mojand Studios wishes to had and haven't.",
          href: "https://minecraft-ui.leman.dev/",
          brandUrl: "https://minecraft-ui.leman.dev/images/brand.png",
          class: "rounded",
          style: {
            color: "#526936",
            text: "white",
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

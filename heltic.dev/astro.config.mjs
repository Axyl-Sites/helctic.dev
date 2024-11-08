import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hectic.dev/",
  base: "/",
  integrations: [
    starlight({
      title: "Helctic",
      description:
        "Helctic, a new FLOSS Distrobution, based on the Helctic kernel.",
      components: {
        TableOfContents: "./src/components/TOC.astro",
        PageTitle: "./src/components/CustomPageTitle.astro",
      },
      logo: {
        light: "/src/assets/helctic.jpg",
        dark: "/src/assets/helctic.jpg",
      },
      customCss: process.env.NO_GRADIENTS
        ? ["./src/styles/_global.css"]
        : ["./src/styles/landing.css", "./src/styles/_global.css"],
      social: {
        github: "https://github.com/Axyl-Projects/Helctic",
        twitter: "https://x.com/@axylprojects",
        discord: "https://discord.gg/J7R7sEZcn9",
        youtube: "https://youtube.com/@axylprojects",
        twitch: "https://twitch.tv/axylprojects",
      },
      editLink: {
        baseUrl: "https://github.com/Axyl-Sites/axyl.org/tree/main/",
      },

      lastUpdated: true,

      sidebar: [
        {
          label: "Announcements",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "What is Happening",
              link: "/en/announcements/what-is-happening",
            },
          ],
        },
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Manifesto",
              link: "/en/getting-started/manifesto",
            },
            {
              label: "Why Helctic?",
              link: "/en/getting-started/Helctic",
            },
            {
              label: "Downloading Helctic",
              link: "/en/getting-started/download",
            },
          ],
        },
        {
          label: "Installation",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Coming Soon",
              link: "/en/installation/coming-soon",
            },
          ],
        },
        {
          label: "Configuration",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Kernel",
              link: "/en/configuration/kernel",
            },
            {
              label: "Hyprland",
              link: "/en/configuration/hyprland",
            },
            {
              label: "nvidia",
              link: "/en/configuration/nvidia",
            },
            {
              label: "Repositories",
              link: "/en/configuration/repositories",
            },
            {
              label: "Themes",
              link: "/en/configuration/themes",
            },
            {
              label: "Utilities",
              link: "/en/configuration/utilities",
            },
          ],
        },
        {
          label: "Customization",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Customizing Shells",
              link: "/en/customization/shell",
            },
            {
              label: "Customizing Display Managers",
              link: "/en/customization/display-manager",
            },
            {
              label: "Customizing Terminal Tools",
              link: "/en/customization/terminal-tools",
            },
          ],
        },
        {
          label: "Support",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Troubleshooting",
              link: "/en/support/troubleshooting",
            },
          ],
        },
        {
          label: "Community",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Discord",
              link: "/en/community/discord",
            },
            {
              label: "Contribute to Helctic",
              link: "/en/community/contribute",
            },
            {
              label: "Getting Help",
              link: "/en/community/getting-help",
            },
            {
              label: "Official Helctic Mirrors",
              link: "/en/community/mirrors",
            },
            {
              label: "Style Guide",
              link: "/en/community/style-guide",
            },
            {
              label: "Setting up a Mirror",
              link: "/en/community/setting-mirror",
            },
            {
              label: "Submitting Bugs",
              link: "/en/community/submitting-bugs",
            },
            {
              label: "Submitting Themes",
              link: "/en/community/submitting-themes",
            },
            {
              label: "Submitting Tools in Axyl",
              link: "/en/community/submitting-tools-axyl",
            },
          ],
        },
        {
          label: "Development",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Testing",
              link: "/en/development/testing",
            },
          ],
        },
        {
          label: "Team",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Austin 'AWFixer' Ware",
              link: "/en/team/awfixer",
            },
          ],
        },
        {
          label: "Policy",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Helctic EULA",
              link: "/en/policy/eula-policy",
            },
            {
              label: "Helctic Network Service Policy",
              link: "/en/policy/network-policy",
            },
            {
              label: "Helctic Code of Conduct",
              link: "/en/policy/code-of-conduct",
            },
            {
              label: "Helctic Collaboration Policy",
              link: "/en/policy/collaboration-policy",
            },
            {
              label: "Helctic Open Source Policy",
              link: "/en/policy/opensource-policy",
            },
            {
              label: "Helctic Package Policy",
              link: "/en/policy/package-policy",
            },
            {
              label: "Helctic Pentesting Tools Policy",
              link: "/en/policy/tools-policy",
            },
            {
              label: "Helctic Privacy Policy",
              link: "/en/policy/privacy-policy",
            },
            {
              label: "Helctic Update Policy",
              link: "/en/policy/update-policy",
            },
            {
              label: "Helctic User Policy",
              link: "/en/policy/user-policy",
            },
            {
              label: "Cookie Policy",
              link: "/en/policy/cookie-policy",
            },
          ],
        },
      ],
    }),
    react(),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

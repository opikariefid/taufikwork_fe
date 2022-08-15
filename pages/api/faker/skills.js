// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      name: 'Flutter',
      link: 'https://flutter.dev/',
    },
    {
      name: 'NextJS',
      link: 'https://nextjs.org/',
    },
    {
      name: 'VueJS',
      link: 'https://vuejs.org/',
    },
    {
      name: 'NuxtJS',
      link: 'https://nuxtjs.org/',
    },
    {
      name: 'TailwindCSS',
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'BuefyCSS',
      link: 'https://buefy.org/',
    },
    {
      name: 'BulmaCSS',
      link: 'https://bulma.io/',
    },
    {
      name: 'Fast Learning',
      link: '',
    },
    {
      name: 'Basic Figma',
      link: 'https://www.figma.com/',
    },
    {
      name: 'SCSS',
      link: 'https://sass-lang.com/',
    },
  ];
  res.status(200).json(data)
}

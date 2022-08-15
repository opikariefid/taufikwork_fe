// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      img: '',
      client: 'Elang Group',
      project: 'E-Course Properti Cerdas',
      language: [
        'NextJS',
        'TailwindCSS',
      ],
      link: '',
    },
    {
      img: '',
      client: 'Midiatama',
      project: 'ReDesign MiCCaPro',
      language: [
        'Flutter',
        'GetX',
      ],
      link: '',
    },
    {
      img: '',
      client: 'Bageur Solusi Indonesia',
      project: 'Ayo Sedekah',
      language: [
        'Flutter',
        'GetX',
      ],
      link: 'https://play.google.com/store/apps/details?id=id.app.ayosedekah',
    },
    {
      img: '',
      client: 'Lovrinz',
      project: 'Novelpedia',
      language: [
        'Flutter',
        'GetX',
        'NuxtJS',
        'BuefyCSS',
        'BulmaCSS',
      ],
      link: 'https://play.google.com/store/apps/details?id=id.app.novelpedia',
    },
    {
      img: '',
      client: 'Kedaikita',
      project: 'Kedaikita',
      language: [
        'NuxtJS',
        'BuefyCSS',
        'BulmaCSS',
      ],
      link: 'https://kedaikita.id/',
    },
    {
      img: '',
      client: 'Bageur Solusi Indonesia',
      project: 'Bageur Website',
      language: [
        'NuxtJS',
        'BuefyCSS',
        'BulmaCSS',
      ],
      link: 'https://bageur.id/',
    },
    {
      img: '',
      client: 'Bageur Solusi Indonesia',
      project: 'Bageur CV',
      language: [
        'NuxtJS',
        'BuefyCSS',
        'BulmaCSS',
      ],
      link: 'https://buatcv.id/',
    },
    {
      img: '',
      client: 'Bageur Solusi Indonesia',
      project: 'Bageur CMS',
      language: [
        'NuxtJS',
        'BuefyCSS',
        'BulmaCSS',
      ],
      link: '',
    },
    {
      img: '',
      client: 'Midiatama',
      project: 'Midiatama Website',
      language: [
        'NuxtJS',
        'BuefyCSS',
        'BulmaCSS',
      ],
      link: 'https://midiatama.co.id/',
    },
    {
      img: '',
      client: 'Taufik Arif',
      project: 'Finance Diary App',
      language: [
        'Flutter'
      ],
      link: '',
    },
  ];
  res.status(200).json(data)
}

// Liste des élections
export const elections = [
  {
    id: 'e1',
    title: 'Élection Présidentielle 2024',
    description: 'Élection Présidentielle 2024',
    thumbnail: '/assets/flag1.png',
    candidates: ['c1', 'c2', 'c3', 'c4'],
    voters: [],
  },
  {
    id: 'e2',
    title: 'Élection Législative 2024',
    description: 'Élection Législative 2024',
    thumbnail: '/assets/flag2.jpg',
    candidates: ['c5', 'c6', 'c7'],
    voters: [],
  },
  {
    id: 'e3',
    title: 'Élection Municipale 2024',
    description: 'Élection Municipale 2024',
    thumbnail: '/assets/flag3.jpeg',
    candidates: [],
    voters: [],
  },
];

// Liste des candidats
export const candidates = [
  {
    id: 'c1',
    fullName: "Bassirou Diomaye Faye",
    image: '/assets/Candidats1.jpeg',
    description: 'Bassirou Diomaye Faye',
    voteCount: 23,
    elections: ['e1'],
  },
  {
    id: 'c2',
    fullName: "Macky Sall",
    image: '/assets/Candidats2.jpg',
    description: 'Macky Sall',
    voteCount: 30,
    elections: ['e1'],
  },
  {
    id: 'c3',
    fullName: "Abdoulaye Wade",
    image: '/assets/Candidats3.jpg',
    description: 'Abdoulaye Wade',
    voteCount: 20,
    elections: ['e1'],
  },
  {
    id: 'c4',
    fullName: "Anta Babacar NGOM",
    image: '/assets/Candidats4.jpg',
    description: 'Anta Babacar NGOM',
    voteCount: 15,
    elections: ['e1'],
  },
  {
    id: 'c5',
    fullName: "Moustapha Niasse",
    image: '/assets/Candidats5.jpeg',
    description: 'Moustapha Niasse',
    voteCount: 10,
    elections: ['e2'],
  },
  {
    id: 'c6',
    fullName: "Idrissa Seck",
    image: '/assets/Candidats6.jpeg',
    description: 'Idrissa Seck',
    voteCount: 8,
    elections: ['e2'],
  },
  {
    id: 'c7',
    fullName: "Cheikh Bamba DIA",
    image: '/assets/Candidats7.jpg',
    description: 'Cheikh Bamba DIA',
    voteCount: 5,
    elections: ['e2'],
  },
];

// Liste des électeurs
export const voters = [
  {
    id: 'v1',
    fullName: "Bassirou Diomaye Faye",
    Email: "bassirou.faye@outlook.com",
    passWord: "bassirou23",
    isAdmin: true,
    voteElections: ['e2'],
  },
  {
    id: 'v2',
    fullName: "Macky Sall",
    Email: "macky.sall@gmail.com",
    passWord: "123456",
    isAdmin: true,
    voteElections: ['e1', 'e2'],
  },
  {
    id: 'v3',
    fullName: "Cheikh Bamba DIA",
    Email: "cheikh.bamba@gmail.com",
    passWord: "123456",
    isAdmin: false,
    voteElections: ['e1', 'e2'],
  },
  {
    id: 'v4',
    fullName: "Idrissa Seck",
    Email: "idrissa.seck@gmail.com",
    passWord: "123456",
    isAdmin: true,
    voteElections: [],
  },
];
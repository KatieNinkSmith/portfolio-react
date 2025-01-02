export type Project = {
  _id: string;
  name: string;
  image: string;
  liveLink: string;
  gitHubRepo: string;
  description: string;
};

// setting type for description as it will have multiple values
// type Description = {
//   what: string;
//   why: string;
//   technologyUsed: string;
//   howToUse: string;
// };

export const projects: Project[] = [
  {
    _id: "1",
    name: "Project 1",
    image: "https://via.placeholder.com/150",
    liveLink: "https://example.com/project1",
    gitHubRepo: "https://github.com/example/project1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo id erat ultricies accumsan.",
  },
  {
    _id: "2",
    name: "Project 2",
    image: "https://via.placeholder.com/150",
    liveLink: "https://example.com/project2",
    gitHubRepo: "https://github.com/example/project2",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at tellus vel velit pellentesque vestibulum.",
  },
  {
    _id: "3",
    name: "Project 3",
    image: "https://via.placeholder.com/150",
    liveLink: "https://example.com/project3",
    gitHubRepo: "https://github.com/example/project3",
    description:
      "Morbi vel ex vel arcu sagittis pellentesque. Donec in purus vel justo semper congue.",
  },
  {
    _id: "4",
    name: "Project 4",
    image: "https://via.placeholder.com/150",
    liveLink: "https://example.com/project4",
    gitHubRepo: "https://github.com/example/project4",
    description: "Sed vel justo id erat ultricies accumsan. Nulla facilisi.",
  },
];

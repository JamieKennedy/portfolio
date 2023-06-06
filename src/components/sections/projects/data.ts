export interface IProject {
    Title: string;
    Description: string;
    GitHubLink?: string;
    DemoLink?: string;
    Tags: string[];
    WIP?: boolean;
}

export const Projects: IProject[] = [
    {
        Title: 'Portfolio Website',
        Description: 'I designed and built this portfolio site.',
        GitHubLink: 'https://github.com/JamieKennedy/portfolio',
        Tags: ['React', 'TypeScript', 'Tailwind'],
        WIP: true,
    },
];

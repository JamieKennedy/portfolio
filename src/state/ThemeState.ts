import { atom } from 'jotai';

type theme = 'dark' | 'light';

export const themeAtom = atom<theme>('dark');

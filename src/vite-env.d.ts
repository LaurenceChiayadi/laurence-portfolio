/// <reference types="vite/client" />

interface INavBarContent {
  label: string;
  position: number;
}

interface IProjects {
  title: string;
  description: string;
  URL?: string;
  stacks: string[];
}

interface LayoutContext {
  handlePageChange: (to: string) => void;
}

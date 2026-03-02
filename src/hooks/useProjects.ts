import { getPublishedProjects, getFeaturedProjects, getProjectBySlug } from '@/data/projects';
import type { Project } from '@/types/project';

export function useProjects() {
  const projects = getPublishedProjects();
  return {
    data: projects,
    isLoading: false,
    error: null,
  };
}

export function useFeaturedProjects() {
  const projects = getFeaturedProjects();
  return {
    data: projects,
    isLoading: false,
    error: null,
  };
}

export function useProject(slug: string) {
  const project = slug ? getProjectBySlug(slug) : null;
  return {
    data: project,
    isLoading: false,
    error: project ? null : (slug ? new Error('Projeto não encontrado') : null),
  };
}

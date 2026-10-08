import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { profileData as initialProfile } from '../data/profile';
import { projectsData as initialProjects } from '../data/projects';
import { certificatesData as initialCertificates } from '../data/certificates';
import { experienceData as initialExperience, educationData as initialEducation } from '../data/experience';
import { skillsData as initialSkills } from '../data/skills';
import { githubProjectsData as initialGithub } from '../data/githubProjects';

// Local storage keys for local fallback CMS persistence
const KEYS = {
  PROFILE: 'arquam_cms_profile',
  PROJECTS: 'arquam_cms_projects',
  CERTIFICATES: 'arquam_cms_certificates',
  EXPERIENCE: 'arquam_cms_experience',
  SKILLS: 'arquam_cms_skills',
  ACHIEVEMENTS: 'arquam_cms_achievements',
  EDUCATION: 'arquam_cms_education'
};

const getLocal = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    return fallback;
  }
};

const setLocal = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Local storage error:", e);
  }
};

export const portfolioService = {
  // --- PROFILE ---
  async getProfile() {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('profiles').select('*').single();
      if (!error && data) return data;
    }
    return getLocal(KEYS.PROFILE, initialProfile);
  },

  async updateProfile(profile) {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('profiles').upsert(profile);
      if (error) throw error;
      return data;
    }
    setLocal(KEYS.PROFILE, profile);
    return profile;
  },

  // --- PROJECTS ---
  async getProjects() {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data;
    }
    return getLocal(KEYS.PROJECTS, initialProjects);
  },

  async saveProject(project) {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('projects').upsert(project).select();
      if (error) throw error;
      return data[0];
    }
    const current = getLocal(KEYS.PROJECTS, initialProjects);
    const exists = current.findIndex(p => p.id === project.id);
    let updated;
    if (exists >= 0) {
      updated = [...current];
      updated[exists] = project;
    } else {
      updated = [project, ...current];
    }
    setLocal(KEYS.PROJECTS, updated);
    return project;
  },

  async deleteProject(id) {
    if (isSupabaseConfigured) {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      return true;
    }
    const current = getLocal(KEYS.PROJECTS, initialProjects);
    const updated = current.filter(p => p.id !== id);
    setLocal(KEYS.PROJECTS, updated);
    return true;
  },

  // --- CERTIFICATES ---
  async getCertificates() {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('certificates').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data;
    }
    return getLocal(KEYS.CERTIFICATES, initialCertificates);
  },

  async saveCertificate(cert) {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('certificates').upsert(cert).select();
      if (error) throw error;
      return data[0];
    }
    const current = getLocal(KEYS.CERTIFICATES, initialCertificates);
    const exists = current.findIndex(c => c.id === cert.id);
    let updated;
    if (exists >= 0) {
      updated = [...current];
      updated[exists] = cert;
    } else {
      updated = [cert, ...current];
    }
    setLocal(KEYS.CERTIFICATES, updated);
    return cert;
  },

  async deleteCertificate(id) {
    if (isSupabaseConfigured) {
      const { error } = await supabase.from('certificates').delete().eq('id', id);
      if (error) throw error;
      return true;
    }
    const current = getLocal(KEYS.CERTIFICATES, initialCertificates);
    const updated = current.filter(c => c.id !== id);
    setLocal(KEYS.CERTIFICATES, updated);
    return true;
  },

  // --- EXPERIENCE ---
  async getExperience() {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('experience').select('*');
      if (!error && data && data.length > 0) return data;
    }
    return getLocal(KEYS.EXPERIENCE, initialExperience);
  },

  async saveExperience(exp) {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.from('experience').upsert(exp).select();
      if (error) throw error;
      return data[0];
    }
    const current = getLocal(KEYS.EXPERIENCE, initialExperience);
    const exists = current.findIndex(e => e.id === exp.id);
    let updated;
    if (exists >= 0) {
      updated = [...current];
      updated[exists] = exp;
    } else {
      updated = [exp, ...current];
    }
    setLocal(KEYS.EXPERIENCE, updated);
    return exp;
  },

  async deleteExperience(id) {
    if (isSupabaseConfigured) {
      const { error } = await supabase.from('experience').delete().eq('id', id);
      if (error) throw error;
      return true;
    }
    const current = getLocal(KEYS.EXPERIENCE, initialExperience);
    const updated = current.filter(e => e.id !== id);
    setLocal(KEYS.EXPERIENCE, updated);
    return true;
  },

  // --- FILE UPLOADS (SUPABASE STORAGE) ---
  async uploadFile(bucket, path, file) {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
      if (error) throw error;
      const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(path);
      return publicUrlData.publicUrl;
    }
    // Fallback: Return object URL for local preview
    return URL.createObjectURL(file);
  }
};

-- ==========================================================================
-- SUPABASE DATABASE & STORAGE SCHEMA — M ARQUAM KAMAL PORTFOLIO CMS
-- Run this script in the Supabase SQL Editor to initialize your CMS database.
-- ==========================================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL DEFAULT 'M Arquam Kamal',
  title TEXT NOT NULL DEFAULT 'Full Stack Web Developer | B.Tech CSE Student',
  university TEXT DEFAULT 'Adamas University',
  degree TEXT DEFAULT 'B.Tech in Computer Science and Engineering',
  location TEXT DEFAULT 'Kolkata, India',
  positioning TEXT,
  introduction TEXT,
  email_gmail TEXT DEFAULT 'marquamkamal7@gmail.com',
  email_outlook TEXT DEFAULT 'm1.kamal@stu.adamasuniversity.ac.in',
  phone TEXT DEFAULT '+91 8434772927',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT DEFAULT 'Full Stack',
  technologies TEXT[],
  github_url TEXT,
  live_url TEXT,
  details TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. CERTIFICATES TABLE
CREATE TABLE IF NOT EXISTS public.certificates (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  category TEXT DEFAULT 'AI/ML',
  date TEXT,
  file_url TEXT,
  type TEXT DEFAULT 'image',
  verification_url TEXT,
  linkedin_url TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. EXPERIENCE TABLE
CREATE TABLE IF NOT EXISTS public.experience (
  id TEXT PRIMARY KEY,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  period TEXT,
  description TEXT,
  highlights TEXT[],
  certificate_file TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. SKILLS TABLE
CREATE TABLE IF NOT EXISTS public.skills (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  proficiency INTEGER DEFAULT 90,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. ACHIEVEMENTS TABLE
CREATE TABLE IF NOT EXISTS public.achievements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  role TEXT,
  date TEXT,
  description TEXT,
  badge TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Public READ Access (Anyone can view published portfolio content)
CREATE POLICY "Public Read Profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public Read Certificates" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "Public Read Experience" ON public.experience FOR SELECT USING (true);
CREATE POLICY "Public Read Skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public Read Achievements" ON public.achievements FOR SELECT USING (true);

-- Authenticated Admin WRITE Access (Only logged-in admin can insert/update/delete)
CREATE POLICY "Admin Write Profiles" ON public.profiles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Projects" ON public.projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Certificates" ON public.certificates FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Experience" ON public.experience FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Skills" ON public.skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Write Achievements" ON public.achievements FOR ALL USING (auth.role() = 'authenticated');

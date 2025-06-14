
-- 1. Create contact_messages table
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. Allow anyone to INSERT messages (for public contact form)
CREATE POLICY "Allow insert for anyone" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- 4. Allow anyone to SELECT and UPDATE (you may later restrict update if desired)
CREATE POLICY "Allow read for all" ON public.contact_messages
  FOR SELECT USING (true);

CREATE POLICY "Allow update for all" ON public.contact_messages
  FOR UPDATE USING (true);

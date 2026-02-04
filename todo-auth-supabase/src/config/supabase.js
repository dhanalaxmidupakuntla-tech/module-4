import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (process.env.NODE_ENV === 'development') {
  console.log('SUPABASE_URL:', supabaseUrl);
}

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase environment variables SUPABASE_URL and SUPABASE_KEY are required');
}

export const supabase = createClient(supabaseUrl, supabaseKey);


import { askFaiqa } from '@/lib/chatbot';

// This is a temporary solution - in production, you should use Supabase Edge Functions
export async function handleChatRequest(message: string): Promise<string> {
  // For now, we'll use the hardcoded API key
  // In production, this should come from environment variables via Supabase
  const API_KEY = "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";
  
  try {
    const response = await askFaiqa(message, API_KEY);
    return response;
  } catch (error) {
    console.error('Chat API Error:', error);
    return "I'm sorry, I'm having trouble responding right now. Please try again later.";
  }
}

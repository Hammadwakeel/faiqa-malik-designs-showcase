
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const faiqaData = {
  personal: {
    name: "Faiqa Malik",
    title: "Fashion Designer & Creative Leader",
    about:
      "Driven visionary Fashion Designer with over four years of hands‑on experience turning bold concepts into runway‑ready collections. Passionate about fusing art and innovation, I excel at trend forecasting, team leadership, and delivering standout designs that captivate both clients and markets. With a sharp eye for detail and a flair for collaborative problem‑solving, I lead projects from initial sketch to final stitch—always pushing the boundaries of style."
  },
  contact: {
    address: "Street #2 Malik House, Farooq-e-azam Colony, Attock City",
    email: "designerfaiqamalik7@gmail.com",
    social: { instagram: "@designer_faiqamalik" }
  },
  education: [
    { degree: "Matriculation in Computer Science", institution: "Jinnah Public School, Attock", period: "2016–2017" },
    { degree: "Intermediate in Arts", institution: "National Textile Institute, G-6/3, Islamabad", period: "2018–2020" },
    { degree: "Bachelors in Fashion Design", institution: "Iqra University, Islamabad", period: "2020–2024" }
  ],
  experience: [
    { role: "Internship", company: "Sui Dhaga Bridals", duration: "3 months (June–Aug 2022)" },
    { role: "Internship", company: "Eleven Clothing", duration: "3 months (July–Sep 2023)" },
    { role: "Designer Assistant", company: "Revolt Riders", duration: "4 months (Jan–Apr 2022)" },
    { role: "Designer Assistant", company: "Elevenstore", duration: "3 months (Sep, Nov–Dec 2023)" },
    { role: "Designer Assistant", company: "Boujee.", duration: "4 months (Aug–Nov 2024)" },
    { role: "Freelance Fashion Designer", company: "Fiverr", duration: "2020–present" }
  ],
  skills: [
    "Sewing","Pattern Making","Illustration","Draping","Garment Construction",
    "Textile Sourcing","Trend Forecasting","Technical Drawing",
    "Adobe Photoshop","Adobe Illustrator","CAD for Fashion (AutoCAD)",
    "Fabric Knowledge"
  ],
  softSkills: [
    "Team Leadership","Creative Collaboration","Communication",
    "Problem‑Solving","Time Management","Attention to Detail",
    "Adaptability","Decision‑Making"
  ],
  languages: [
    { name: "Urdu", level: "native/fluent" },
    { name: "English", level: "professional" }
  ],
  certifications: [
    {
      title: "Textile and Fashion Designing",
      issuer: "National Textile Institute, Islamabad",
      period: "2018–2020"
    }
  ]
};

export async function askFaiqa(question: string, apiKey: string): Promise<string> {
  try {
    // Initialize the LLM client
    const llm = new ChatGroq({
      apiKey: apiKey,
      model: "meta-llama/llama-3.1-70b-versatile",
      temperature: 0,
      maxRetries: 2
    });

    // Convert data to string to avoid template parsing issues
    const dataString = JSON.stringify(faiqaData, null, 2);

    // Build a prompt that loads Faiqa's data and scopes the assistant
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are Faiqa Malik's personal fashion‑design assistant. Use ONLY the following data to answer questions about Faiqa's background, skills, education, experience, and contact details:\n\n" + dataString + "\n\nIf the user's question is outside the scope of this data, respond exactly with: \"I don't know\"."
      ],
      ["user", "{user_question}"]
    ]);

    const chain = prompt.pipe(llm);
    const response = await chain.invoke({ user_question: question });
    
    return response.content as string;
  } catch (error) {
    console.error('Error calling Groq API:', error);
    throw new Error('Failed to get response from chatbot');
  }
}

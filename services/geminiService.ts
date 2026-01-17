
import { GoogleGenAI, Type } from "@google/genai";

export const getFutureInsights = async () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Donne-moi 3 titres punchy et courts sur le futur de la chemise au 21ème siècle (technologie, écologie, metavers). Format JSON.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "description"]
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return [
      { title: "Éco-Pouvoir", description: "Le lin durable remplace le coton assoiffé." },
      { title: "Meta-Textile", description: "La chemise comme avatar numérique." },
      { title: "Smart-Fabric", description: "Des capteurs de pouvoir intégrés." }
    ];
  }
};

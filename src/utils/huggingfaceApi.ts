import { HfInference } from '@huggingface/inference';

export const generateHoroscopePrediction = async (
  apiKey: string,
  zodiacSign: string,
  lunarMansion: string,
  dailyPlanet: string
): Promise<string> => {
  try {
    const hf = new HfInference(apiKey);
    
    const prompt = `คำทำนายดวงชะตาสำหรับผู้ที่:
    - เกิดราศี: ${zodiacSign}
    - มฤตยู: ${lunarMansion}
    - ดาวประจำวัน: ${dailyPlanet}

    กรุณาทำนายแต่ละด้านดังนี้:

    💼 ด้านการงาน:
    💰 ด้านการเงิน:
    💕 ด้านความรัก:
    🏥 ด้านสุขภาพ:`;

    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: prompt,
      parameters: {
        max_new_tokens: 1000,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.15
      }
    });

    // Clean and format the response
    let cleanedText = response.generated_text
      .replace(/คุณเป็นหมอดูที่เชี่ยวชาญ.*?\n/g, '')
      .replace(/ตอบความยาวประมาณ.*?\n/g, '')
      .replace(/กรุณาทำนายแต่ละด้านดังนี้:/g, '')
      .trim();

    // Format each section with emojis and line breaks
    cleanedText = cleanedText
      .replace(/ด้านการงาน:/g, '\n💼 ด้านการงาน:\n')
      .replace(/ด้านการเงิน:/g, '\n💰 ด้านการเงิน:\n')
      .replace(/ด้านความรัก:/g, '\n💕 ด้านความรัก:\n')
      .replace(/ด้านสุขภาพ:/g, '\n🏥 ด้านสุขภาพ:\n');

    return cleanedText;
  } catch (error) {
    console.error('Error generating prediction:', error);
    return 'ขออภัย ไม่สามารถสร้างคำทำนายได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง';
  }
};
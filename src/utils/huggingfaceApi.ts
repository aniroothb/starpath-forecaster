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
    
    1. การงาน
    2. การเงิน
    3. ความรัก
    4. สุขภาพ`;

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

    // Remove the instructions from the response if they appear
    let cleanedText = response.generated_text
      .replace(/คุณเป็นหมอดูที่เชี่ยวชาญ.*?\n/g, '')
      .replace(/ตอบความยาวประมาณ.*?\n/g, '')
      .trim();

    return cleanedText;
  } catch (error) {
    console.error('Error generating prediction:', error);
    return 'ขออภัย ไม่สามารถสร้างคำทำนายได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง';
  }
};
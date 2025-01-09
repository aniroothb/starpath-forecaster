import { HfInference } from '@huggingface/inference';

export const generateHoroscopePrediction = async (
  apiKey: string,
  zodiacSign: string,
  lunarMansion: string,
  dailyPlanet: string
): Promise<string> => {
  try {
    const hf = new HfInference(apiKey);
    
    const prompt = `คุณเป็นหมอดูที่เชี่ยวชาญด้านโหราศาสตร์ไทย กรุณาทำนายดวงชะตาสำหรับผู้ที่:
    - เกิดราศี: ${zodiacSign}
    - มฤตยู: ${lunarMansion}
    - ดาวประจำวัน: ${dailyPlanet}
    
    ให้คำทำนายที่ครอบคลุมด้าน:
    1. การงาน
    2. การเงิน
    3. ความรัก
    4. สุขภาพ
    
    ตอบความยาวประมาณ 3-4 ย่อหน้า`;

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

    return response.generated_text;
  } catch (error) {
    console.error('Error generating prediction:', error);
    return 'ขออภัย ไม่สามารถสร้างคำทำนายได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง';
  }
};
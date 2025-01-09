export const generateHoroscopePrediction = async (
  apiKey: string,
  zodiacSign: string,
  lunarMansion: string,
  dailyPlanet: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'คุณเป็นหมอดูที่เชี่ยวชาญด้านโหราศาสตร์ไทย ให้คำทำนายที่แม่นยำและเป็นกลาง'
          },
          {
            role: 'user',
            content: `กรุณาทำนายดวงชะตาสำหรับผู้ที่:
            - เกิดราศี: ${zodiacSign}
            - มฤตยู: ${lunarMansion}
            - ดาวประจำวัน: ${dailyPlanet}
            
            ให้คำทำนายที่ครอบคลุมด้าน:
            1. การงาน
            2. การเงิน
            3. ความรัก
            4. สุขภาพ
            
            ตอบความยาวประมาณ 3-4 ย่อหน้า`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate prediction');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating prediction:', error);
    return 'ขออภัย ไม่สามารถสร้างคำทำนายได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง';
  }
};
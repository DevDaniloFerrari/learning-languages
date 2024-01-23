const axios = require('axios');

export default async function saySomething(something) {
    const requestData = {
      model: 'tts-1',
      input: something,
      voice: 'alloy'
    };
  
    try {
      const response = await axios.post('https://api.openai.com/v1/audio/speech', requestData, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      });
  
      const audioBlob = new Blob([response.data], { type: 'audio/mp3' });
      const audioSrc = URL.createObjectURL(audioBlob);
  
      return audioSrc
    } catch (error) {
      console.error('Error generating speech:', error.response ? error.response.data : error.message);
    }
  }
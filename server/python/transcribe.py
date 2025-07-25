import sys
from faster_whisper import WhisperModel

# Load model (we use "base" for now — good tradeoff of speed + accuracy)
model_size = "base"
model = WhisperModel(model_size, compute_type="int8")

def transcribe(audio_path):
    segments, info = model.transcribe(audio_path, beam_size=5)
    full_text = " ".join([segment.text.strip() for segment in segments])
    return full_text

if __name__ == "__main__":
    # Get audio file path from Node.js
    audio_path = sys.argv[1]
    result = transcribe(audio_path)
    print(result)

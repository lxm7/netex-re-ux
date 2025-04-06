// components/common/VoiceSearch.tsx
import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, X } from "lucide-react";

interface VoiceSearchProps {
  onSearchResult?: (result: string) => void;
}

const VoiceSearch = ({ onSearchResult }: VoiceSearchProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check if SpeechRecognition is supported
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      setIsSupported(false);
      return;
    }

    // Initialize SpeechRecognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event: any) => {
      const current = event.resultIndex;
      const result = event.results[current][0].transcript;
      setTranscript(result);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      if (transcript && onSearchResult) {
        onSearchResult(transcript);
      }
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onSearchResult, transcript]);

  const toggleListening = () => {
    if (!isSupported) return;

    setShowPanel(true);
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const closePanel = () => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setShowPanel(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleListening}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        aria-label={isListening ? "Stop voice search" : "Start voice search"}
        disabled={!isSupported}
        title={
          !isSupported
            ? "Voice search not supported on your browser"
            : "Voice search"
        }
      >
        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
      </button>

      {showPanel && (
        <div className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium">Voice Search</h3>
            <button
              onClick={closePanel}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close voice search panel"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-20 bg-gray-50 rounded p-2 mb-3 overflow-y-auto text-sm">
            {isListening
              ? transcript
                ? transcript
                : "Listening..."
              : transcript
              ? transcript
              : "Tap the mic to start speaking"}
          </div>

          <div className="flex justify-center">
            <button
              onClick={toggleListening}
              className={`flex items-center justify-center rounded-full w-12 h-12 ${
                isListening
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
              aria-label={isListening ? "Stop listening" : "Start listening"}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceSearch;

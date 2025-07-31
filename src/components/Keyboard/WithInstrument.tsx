import { useAudioContext } from "../AudioContextProvider";
import { SoundfontProvider } from "../../adapters/Soundfont";
import { Keyboard } from "../Keyboard";
import { useInstrument } from "../../state/Instrument";
import { useEffect } from "react";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};

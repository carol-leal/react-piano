import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";
import { InstrumentContextProvider } from "../../state/Instrument";

export const Playground = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};

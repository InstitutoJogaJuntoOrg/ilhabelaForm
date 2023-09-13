import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface TimerType {
    seconds: number;
    minutes: number;
    active: boolean;
    setSeconds: Dispatch<SetStateAction<number>>;
    setMinutes: Dispatch<SetStateAction<number>>;
    setActive: Dispatch<SetStateAction<boolean>>;
}

export const TimerContext = createContext<TimerType>({
    seconds: 0,
    minutes: 0,
    active: true,
    setSeconds: () => {},
    setMinutes: () => {},
    setActive: () => {},
});

interface TimerProviderProps {
    children: ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [active, setActive] = useState(true);

    return (
        <TimerContext.Provider value={{ seconds, setSeconds, minutes, setMinutes, active, setActive }}>
            {children}
        </TimerContext.Provider>
    );
};

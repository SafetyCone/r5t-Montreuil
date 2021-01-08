import { LogLevel } from "../Enumerations/LogLevel";
export declare class Logger {
    Level: LogLevel;
    Sink: (message: string) => void;
    constructor(Level?: LogLevel, Sink?: (message: string) => void);
    Log(level: LogLevel, message: string): void;
    LogTrace(message: string): void;
    LogDebug(message: string): void;
    LogInformation(message: string): void;
    LogWarning(message: string): void;
    LogError(message: string): void;
    TestLevels(): void;
}
//# sourceMappingURL=Logger.d.ts.map
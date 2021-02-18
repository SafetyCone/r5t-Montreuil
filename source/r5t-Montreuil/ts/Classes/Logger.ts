import { LogLevel } from "../Enumerations/LogLevel";


export class Logger
{
    constructor (public Level: LogLevel = LogLevel.Information, public Sink: (message: string) => void = console.log)
    {
    }

    public Log(level: LogLevel, message: string)
    {
        if(this.Level >= level)
        {
            this.Sink(message);
        }
    }

    public LogTrace(message: string)
    {
        this.Log(LogLevel.Trace, message);
    }

    public LogDebug(message: string)
    {
        this.Log(LogLevel.Debug, message);
    }

    public LogInformation(message: string)
    {
        this.Log(LogLevel.Information, message);
    }

    public LogWarning(message: string)
    {
        this.Log(LogLevel.Warning, message);
    }

    public LogError(message: string)
    {
        this.Log(LogLevel.Error, message);
    }

    public TestLevels()
    {
        this.LogTrace("Trace");
        this.LogDebug("Debug");
        this.LogInformation("Information");
        this.LogWarning("Warning");
        this.LogError("Error");
    }
}
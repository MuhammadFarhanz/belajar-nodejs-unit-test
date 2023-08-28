import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("create new logger with console & file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "50m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 10000; i++) {
    logger.info(`Hello World ${i}`);
  }
});

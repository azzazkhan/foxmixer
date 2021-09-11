export const API_URL =
  (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://www.foxmixer.io") +
  "/api/mix";
export const LOG_URL =
  (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://www.foxmixer.io") +
  "/mix/[mixID]/LetterOfGuarantee.txt";
0;

export const getLogURL = (mixID: string): string => {
  return LOG_URL.replace("[mixID]", mixID);
};

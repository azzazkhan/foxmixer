export const API_URL =
  (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "") + "/api/mix";
export const LOG_URL =
  (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "") +
  "/mix/[mixID]/LetterOfGuarantee.txt";

export const getLogURL = (mixID: string): string => {
  return LOG_URL.replace("[mixID]", mixID);
};

import axios from "axios";
import {API_URL} from "@/config";
import {Result} from "@/store/types";

export const fetchMix = async (mixID: string): Promise<Result> => {
  const res = await axios.get(API_URL + "/" + mixID);
  return res.data as Result;
};

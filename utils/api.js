
import {AsyncStorage} from "react-native";
export const STORAGE_KEY = "GEO_CARD";

export const retrievePosts = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

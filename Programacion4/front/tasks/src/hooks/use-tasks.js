import { useEffect } from "react";
import { isNullOrEmpty } from "../utils/string-validation";
import { useArray } from "./use-array";
import {v4 as uuidv4} from "uuid";

const initial = JSON.parse(localStorage.getItem("tasks"));

export const useTasks = (initialValue = []) => {
  

  return { tasks, addTask, completeTask, deleteTask };
};

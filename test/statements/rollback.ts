import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "ROLLBACK WORK.",
  "ROLLBACK CONNECTION (lv_con).",
  "ROLLBACK CONNECTION default.",
];

statementType(tests, "ROLLBACK WORK", Statements.Rollback);
import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "SUMMARY.",
];

statementType(tests, "SUMMARY", Statements.Summary);
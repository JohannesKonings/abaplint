import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "CALL DATABASE PROCEDURE ('ZFOO')\n" +
  "  EXPORTING foo = bar\n" +
  "  IMPORTING moo = boo.",

  "CALL DATABASE PROCEDURE (lv_name) CONNECTION (lv_con) PARAMETER-TABLE lt_par.",
];

statementType(tests, "CALL DATABASE", Statements.CallDatabase);
import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "IMPORT DYNPRO ls_h lt_f lt_e lt_m ID ls_dynp_id.",
];

statementType(tests, "IMPORT DYNPRO", Statements.ImportDynpro);
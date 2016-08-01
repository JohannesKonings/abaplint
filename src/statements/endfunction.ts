import { Statement } from "./statement";
import { Token } from "../tokens/";
import * as Combi from "../combi";

let str = Combi.str;

export class Endfunction extends Statement {

  public static get_matcher(): Combi.IRunnable {
    return str("ENDFUNCTION");
  }

  public static match(tokens: Array<Token>): Statement {
    let result = Combi.Combi.run(this.get_matcher( ), tokens, true);
    if (result === true) {
      return new Endfunction(tokens);
    }
    return undefined;
  }

}
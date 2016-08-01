import { Statement } from "./statement";
import { Token } from "../tokens/";
import * as Combi from "../combi";

export class Endinterface extends Statement {

  public static get_matcher(): Combi.IRunnable {
    return Combi.str("ENDINTERFACE");
  }

  public static match(tokens: Array<Token>): Statement {
    let result = Combi.Combi.run(this.get_matcher( ), tokens, true);
    if (result === true) {
      return new Endinterface(tokens);
    }
    return undefined;
  }

}
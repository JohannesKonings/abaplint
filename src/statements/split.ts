import { Statement } from "./statement";
import { Token } from "../tokens/";
import * as Combi from "../combi";
import Reuse from "./reuse";

let str = Combi.str;
let seq = Combi.seq;
let alt = Combi.alt;
let plus = Combi.plus;

export class Split extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let into = alt(seq(str("TABLE"), Reuse.target()), plus(Reuse.target()));

    let ret = seq(str("SPLIT"),
                  Reuse.source(),
                  str("AT"),
                  Reuse.source(),
                  str("INTO"),
                  into);
    return ret;
  }

  public static match(tokens: Array<Token>): Statement {
    let result = Combi.Combi.run(this.get_matcher( ), tokens, true);
    if (result === true) {
      return new Split(tokens);
    }
    return undefined;
  }

}
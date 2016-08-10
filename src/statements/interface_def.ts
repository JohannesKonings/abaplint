import { Statement } from "./statement";
import * as Combi from "../combi";
import Reuse from "./reuse";

let str = Combi.str;
let seq = Combi.seq;
let opt = Combi.opt;
let alt = Combi.alt;

export class InterfaceDef extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let abstract = alt(seq(str("ABSTRACT METHODS"), Reuse.field()),
                       str("ALL METHODS ABSTRACT"));

    return seq(str("INTERFACES"),
               Reuse.field(),
               opt(abstract));
  }

}
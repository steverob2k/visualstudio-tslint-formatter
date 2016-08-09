import * as Lint from "tslint/lib/lint";

export class Formatter extends Lint.Formatters.AbstractFormatter {

  public format(failures: Lint.RuleFailure[]): string {
    return failures.map(this.formatFailure).join("\n") + "\n \n";
  }

  private formatFailure(failure: Lint.RuleFailure): string {
    let filePath = (failure.getFileName()).toString().replace(/\//g, "\\");
    let lineCharNos = failure.getStartPosition().getLineAndCharacter();
    let lineNo = lineCharNos.line;
    let characterNo = lineCharNos.character;
    let message = failure.getFailure();
    let ruleName = failure.getRuleName();

    return filePath + "(" + (lineNo + 1) + "," + (characterNo + 1) + "): warning " + ruleName + ": " + message;

  }

}

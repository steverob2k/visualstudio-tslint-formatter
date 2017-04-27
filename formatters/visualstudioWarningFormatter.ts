import * as Lint from "tslint";

export class Formatter extends Lint.Formatters.AbstractFormatter {

  public format(failures: Lint.RuleFailure[]): string {
    return failures.map(this.formatFailure).join("\n") + "\n \n";
  }

  private formatFailure(failure: Lint.RuleFailure): string {
    const filePath = (failure.getFileName()).toString().replace(/\//g, "\\");
    const lineCharNos = failure.getStartPosition().getLineAndCharacter();
    const lineNo = lineCharNos.line;
    const characterNo = lineCharNos.character;
    const message = failure.getFailure();
    const ruleName = failure.getRuleName();

    return filePath + "(" + (lineNo + 1) + "," + (characterNo + 1) + "): warning " + ruleName + ": " + message;

  }

}

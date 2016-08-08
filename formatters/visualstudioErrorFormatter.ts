import * as Lint from "tslint/lib/lint";

export class VisualstudioErrorFormatter extends Lint.Formatters.AbstractFormatter {

  public format(failures: Lint.RuleFailure[]): string {
    return failures.map(this.formatFailure).join("\n") + "\n";
  }

  private formatFailure(failure: Lint.RuleFailure): string {
    let fileName = failure.getFileName();
    let lineCharNos = failure.getStartPosition().getLineAndCharacter();
    let lineNo = lineCharNos.line;
    let characterNo = lineCharNos.character;
    let message = failure.getFailure();
    let ruleName = failure.getRuleName();

    return fileName + "(" + (lineNo) + "," + (characterNo) + "): error " + ruleName + ": " + message;

  }

}

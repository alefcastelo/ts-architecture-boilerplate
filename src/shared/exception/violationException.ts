export class ViolationException extends Error {
  constructor(
    protected violations: unknown
  ) {
    super('input.invalid')
    this.name = 'ViolationException'
  }
}

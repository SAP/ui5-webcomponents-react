export class IllegalConnectionError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'IllegalConnectionError';
  }
}

export class InvalidDiscreteLabelError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'InvalidDiscreteLabelError';
  }
}

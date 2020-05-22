export enum UploadState {
  /**
   * The file has been uploaded successfully.
   */
  Complete = 'Complete',

  /**
   * The file cannot be uploaded due to an error.
   */
  Error = 'Error',

  /**
   * The file is awaiting an explicit command to start being uploaded.
   */
  Ready = 'Ready',

  /**
   * The file is currently being uploaded.
   */
  Uploading = 'Uploading'
}

export interface Node {
  id: string;
  privKey: string;
  pubKey: string;
}

export interface SharedFile {
  createdAt: Date,
  updatedAt: Date,
  id: number,
  path: string,
  pathIsValid: boolean,
  size: number,
  mime: string,
  checksum: string,
  provider: FileProvider
  // hashes
}

export interface FileProvider {
  id: {id: string, pubKey: string};
  isLocal: boolean;
  relayedConn: boolean;
  multiaddrs: string[]
}

export interface DownloadRequest {
  remotePeerId: string,
  remoteFileId: number,
  override: boolean
}

export enum DownloadStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  COMPLETED_UNVERIFIED = 'COMPLETED_UNVERIFIED',
  COMPLETED = 'COMPLETED',
  COMPLETED_INTEGRITY_FAILED = 'COMPLETED_INTEGRITY_FAILED',
  FAILED = 'FAILED',
  DELETED = 'DELETED'
}

export interface DownloadState {
  id: number,
  percentage: number,
  /**
   * DownloadStatus
   */
  status: DownloadStatus,
  /**
   * offset in bytes
   */
  offset: number
}

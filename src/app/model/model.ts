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
  // hashes
}

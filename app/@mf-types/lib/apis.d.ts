
    export type RemoteKeys = 'lib';
    type PackageType<T> = T extends 'lib' ? typeof import('lib') :any;
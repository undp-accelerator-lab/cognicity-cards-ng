/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'gulp';
declare module 'minimist';
declare module 'del';
declare module 'gulp-change';
declare module 'gulp-changed-in-place';
declare module 'gulp-rename';

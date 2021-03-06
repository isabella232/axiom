// Copyright (c) 2015 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** @typedef JsExecuteContext$$module$axiom$fs$js$execute_context */
var JsExecuteContext;

/**
 * @param {JsExecuteContext} cx
 * @return {void}
 */
export var main = function(cx) {
  cx.ready();

  if (cx.getArg('help')) {
    cx.stdout.write([
      'usage: pwd',
      'Return the present working directory.',
      '',
      'If the environment variable `$PWD` is not set, a reasonable default',
      'directory will be returned.'
    ].join('\r\n') + '\r\n');
    cx.closeOk();
    return;
  }

  /** @type {string} */
  var pwd = cx.getEnv('$PWD',
      cx.fileSystemManager.defaultFileSystem.rootPath.spec);
  cx.closeOk(pwd);
};

export default main;

main.signature = {
  'help|h': '?'
};

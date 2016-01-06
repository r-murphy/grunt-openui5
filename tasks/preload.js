// Copyright 2015 SAP SE.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http: //www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific
// language governing permissions and limitations under the License.

'use strict';

var preload = require('openui5-preload');

module.exports = function (grunt) {

	grunt.registerMultiTask('openui5_preload', 'Create OpenUI5 preload files', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options();
		var data = this.data || {};
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				options[key] = data[key];
			}
		}

		try {
			preload(options);
		} catch (error) {
			grunt.fail.warn(error.message);
			return;
		}

	});
};

/*!
 loader.module.js - v2.0.1

 Copyright (c) 2018-2019 Thomas M. Brodhead <https://bmt-systems.com>
 Released under the MIT license

 Date: 2019-06-27
*/

/*
This is a sample loader.module.js specific to this site.
It is the only JavaScript file you need to edit.
Begin by importing the default object from enqueue.module.js
Then use the enqueue method to specify the JavaScript file necessary for your site.
Then call the run() method to append the scripts synchronously; run() waits for each 
to load before the next is appended.
*/

import o from './enqueue.module.js';

// Enqueue all scripts in sequential order, specifying their attributes:
o.enqueue({
	src: 'https://code.jquery.com/jquery-3.4.1.min.js',
	integrity: 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=',
	crossOrigin: 'anonymous'
});

o.enqueue({
	src: 'javascript/site.module.js'
});

// Run the scripts:
o.run();

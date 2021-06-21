
import { serve }  from  './deps.js';

import  getIndex  from  './api/mod.js';
import  getAbout  from  './api/about.js';


serve(  {
          '/'      :   getIndex,
          '/about' :   getAbout
        }
);

addEventListener('fetch', (event) => {
    const response =  new Response( 'Hello GitPod', 
                                    { headers: {'Content-Type': 'text/plain'} }
                      );

  event.respondWith(response);
});
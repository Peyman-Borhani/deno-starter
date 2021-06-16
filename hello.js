/*
import { serve }  from  './deps.js';
import  getIndex  from  './api/mod.js';
import  getAbout  from  './api/about.jsx';


serve(  {
          '/'      :   getIndex,
          '/about' :   getAbout
        }
); */

addEventListener('fetch', (event) => {
    const response =  new Response( 'Hello Gitpod', 
                                    { headers: {'Content-Type': 'text/plain'} }
                      );

  event.respondWith(response);
});
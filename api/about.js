
// import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
// import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

import { json }  from  "../deps.js" ;

function  App() {
          return `  <html>
                      <head>    <title> Hello </title>    </head>

                      <body>    <h1> The About Page </h1>
                      </body>
                    </html>
                  `;
}

export  default async function index() {
        return  new   Response( App(),
                                { headers: {'Content-Type': 'text/html'} }
        );
}

module.exports=[85266,e=>{"use strict";var t=e.i(11391),a=e.i(38209),r=e.i(22286),i=e.i(67099),n=e.i(64624),s=e.i(35381),o=e.i(48878),l=e.i(90642),d=e.i(45657),c=e.i(38116),p=e.i(35371),u=e.i(17432),f=e.i(9776),g=e.i(75773),m=e.i(16908),h=e.i(93695);e.i(35673);var v=e.i(80150),x=e.i(83352),b=e.i(11542);async function R(e){try{let{customerData:t,testResults:a,leftEarResults:r,rightEarResults:i}=await e.json();if(!t||!a)return console.error("[v0] Missing customer data or test results"),x.NextResponse.json({error:"Missing customer data or test results"},{status:400});if(!process.env.RESEND_API_KEY)return console.error("[v0] RESEND_API_KEY environment variable is not set"),x.NextResponse.json({error:"Email service not properly configured",details:"RESEND_API_KEY environment variable is missing. Please add it to your Vercel project environment variables or local .env.local file.",setupRequired:!0},{status:500});let n=new b.Resend(process.env.RESEND_API_KEY),s="adhamemad.oracle@gmail.com";r.reduce((e,t)=>e+t.threshold,0),r.length,i.reduce((e,t)=>e+t.threshold,0),i.length;let o=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),l=`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; }
          .container { max-width: 900px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1); }
          
          /* Header */
          .header {
            background: linear-gradient(135deg, #0369a1 0%, #06b6d4 50%, #0d9488 100%);
            color: white;
            padding: 50px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 300px;
            height: 300px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
          }
          .header h1 { font-size: 36px; font-weight: 700; margin-bottom: 10px; position: relative; z-index: 1; }
          .header p { font-size: 16px; opacity: 0.95; position: relative; z-index: 1; }
          
          /* Main content */
          .content { padding: 50px 40px; }
          
          /* Customer info box */
          .customer-info {
            background: linear-gradient(135deg, #f0f9ff 0%, #f0fdfa 100%);
            border-left: 5px solid #0369a1;
            padding: 25px;
            margin-bottom: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(3, 105, 161, 0.1);
          }
          .customer-info h3 { color: #0369a1; font-size: 18px; margin-bottom: 20px; font-weight: 600; }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .info-item { }
          .info-label { font-weight: 600; color: #0369a1; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
          .info-value { color: #111827; font-size: 16px; font-weight: 500; }
          
          /* Results section */
          .results-section {
            background: white;
            padding: 40px;
            margin-bottom: 30px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
          }
          .results-section h2 { color: #111827; font-size: 24px; margin-bottom: 25px; border-bottom: 3px solid #06b6d4; padding-bottom: 15px; font-weight: 700; }
          
          /* Assessment box */
          .assessment-box {
            background: linear-gradient(135deg, #ecf0f1 0%, #f8f9fa 100%);
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            text-align: center;
            border: 2px solid #0369a1;
          }
          .assessment-status { font-size: 28px; font-weight: 700; color: #0369a1; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
          .assessment-desc { font-size: 15px; color: #4b5563; font-weight: 500; }
          
          /* Frequency results */
          .frequency-results {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 25px;
          }
          .ear-results {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 25px;
            border-radius: 12px;
            border-left: 5px solid #06b6d4;
          }
          .ear-results h3 { color: #06b6d4; font-size: 18px; margin-bottom: 20px; text-align: center; font-weight: 700; }
          .frequency-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .frequency-item:last-child { border-bottom: none; }
          .freq-label { font-size: 13px; font-weight: 600; color: #374151; }
          .freq-bar {
            width: 45%;
            height: 10px;
            background: #e5e7eb;
            border-radius: 5px;
            overflow: hidden;
            margin: 0 12px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
          }
          .freq-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #0369a1 0%, #06b6d4 50%, #0d9488 100%);
            border-radius: 5px;
          }
          .freq-value { font-size: 13px; font-weight: 700; color: #0369a1; min-width: 40px; text-align: right; }
          
          /* Recommendations */
          .recommendations {
            background: linear-gradient(135deg, #f0fdf4 0%, #f0fdfa 100%);
            border-left: 5px solid #0d9488;
            padding: 25px;
            border-radius: 12px;
            margin-top: 25px;
            box-shadow: 0 4px 6px rgba(13, 148, 136, 0.1);
          }
          .recommendations h3 { color: #0d9488; font-size: 18px; margin-bottom: 15px; font-weight: 700; }
          .recommendations ul { padding-left: 20px; }
          .recommendations li { margin-bottom: 10px; font-size: 14px; color: #374151; line-height: 1.6; }
          
          /* Footer */
          .footer {
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
            color: white;
            padding: 40px;
            text-align: center;
            font-size: 13px;
          }
          .footer p { margin-bottom: 10px; opacity: 0.9; }
          .footer a { color: #06b6d4; text-decoration: none; font-weight: 600; }
          .footer .disclaimer { margin-top: 25px; padding-top: 25px; border-top: 1px solid #374151; font-style: italic; color: #9ca3af; line-height: 1.8; }
          
          /* Responsive */
          @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .frequency-results { grid-template-columns: 1fr; }
            .header h1 { font-size: 28px; }
            .header, .content, .results-section, .customer-info, .recommendations, .footer { padding: 25px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <h1>Al-Barakat Hearing Care</h1>
            <p>Your Professional Hearing Test Results</p>
          </div>
          
          <!-- Content -->
          <div class="content">
            <!-- Customer Info -->
            <div class="customer-info">
              <h3>Patient Information</h3>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${t.name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Age</div>
                  <div class="info-value">${t.age} years old</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Gender</div>
                  <div class="info-value">${t.gender.charAt(0).toUpperCase()+t.gender.slice(1)}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Mobile</div>
                  <div class="info-value">${t.mobile}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${t.email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Preferred Branch</div>
                  <div class="info-value">${t.selectedBranch?.city||"Not specified"}</div>
                </div>
              </div>
            </div>
            
            <!-- Results -->
            <div class="results-section">
              <h2>Test Results & Assessment</h2>
              
              <div class="assessment-box">
                <div class="assessment-status">${a.overallAssessment.replace(/-/g," ")}</div>
                <div class="assessment-desc">${"normal"===a.overallAssessment?"Your hearing test shows normal hearing levels":"Your hearing test may indicate hearing concerns"}</div>
              </div>
              
              <div class="frequency-results">
                <div class="ear-results">
                  <h3>👂 LEFT EAR</h3>
                  ${r.map(e=>`
                    <div class="frequency-item">
                      <span class="freq-label">${e.frequency} Hz</span>
                      <div class="freq-bar">
                        <div class="freq-bar-fill" style="width: ${(1-e.threshold)*100}%"></div>
                      </div>
                      <span class="freq-value">${Math.round((1-e.threshold)*100)}%</span>
                    </div>
                  `).join("")}
                </div>
                
                <div class="ear-results">
                  <h3>👂 RIGHT EAR</h3>
                  ${i.map(e=>`
                    <div class="frequency-item">
                      <span class="freq-label">${e.frequency} Hz</span>
                      <div class="freq-bar">
                        <div class="freq-bar-fill" style="width: ${(1-e.threshold)*100}%"></div>
                      </div>
                      <span class="freq-value">${Math.round((1-e.threshold)*100)}%</span>
                    </div>
                  `).join("")}
                </div>
              </div>
              
              <div class="recommendations">
                <h3>📋 Recommended Actions</h3>
                <ul>
                  ${a.recommendations.map(e=>`<li>${e}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <p><strong>Test Completed:</strong> ${o}</p>
            <p>Al-Barakat Hearing Care Centers | Professional Hearing Healthcare</p>
            <div class="disclaimer">
              <p>⚠️ IMPORTANT DISCLAIMER: This online hearing test is a preliminary screening tool and does not replace a comprehensive audiological evaluation. Please consult with our certified audiologists for accurate diagnosis and personalized treatment recommendations.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,d=await n.emails.send({from:"Al-Barakat Hearing Care <onboarding@resend.dev>",to:[s],replyTo:t.email,subject:`Hearing Test Results - ${t.name}`,html:l}),c=d?.id??null;return console.log("[v0] Hearing test results email sent successfully to",s,"with ID:",c),x.NextResponse.json({success:!0,message:"Test results sent successfully",id:c,recipientEmail:s})}catch(e){return console.error("[v0] Error sending test results email:",e.message),x.NextResponse.json({error:"Failed to send test results email",details:e.message||"Unknown error occurred"},{status:500})}}e.s(["POST",()=>R],65121);var w=e.i(65121);let y=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/send-hearing-test-results/route",pathname:"/api/send-hearing-test-results",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/send-hearing-test-results/route.tsx",nextConfigOutput:"export",userland:w}),{workAsyncStorage:E,workUnitAsyncStorage:A,serverHooks:C}=y;function T(){return(0,r.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:A})}async function q(e,t,r){y.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let x="/api/send-hearing-test-results/route";x=x.replace(/\/index$/,"")||"/";let b=await y.prepare(e,t,{srcPage:x,multiZoneDraftMode:!1});if(!b)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:R,params:w,nextConfig:E,parsedUrl:A,isDraftMode:C,prerenderManifest:T,routerServerContext:q,isOnDemandRevalidate:P,revalidateOnlyGenerated:N,resolvedPathname:H,clientReferenceManifest:k,serverActionsManifest:$}=b,S=(0,o.normalizeAppPath)(x),_=!!(T.dynamicRoutes[S]||T.routes[H]),I=async()=>((null==q?void 0:q.render404)?await q.render404(e,t,A,!1):t.end("This page could not be found"),null);if(_&&!C){let e=!!T.routes[H],t=T.dynamicRoutes[S];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await I();throw new h.NoFallbackError}}let O=null;!_||y.isDev||C||(O="/index"===(O=H)?"/":O);let z=!0===y.isDev||!_,D=_&&!z;$&&k&&(0,s.setManifestsSingleton)({page:x,clientReferenceManifest:k,serverActionsManifest:$});let U=e.method||"GET",M=(0,n.getTracer)(),j=M.getActiveScopeSpan(),F={params:w,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:z,incrementalCache:(0,i.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r,i)=>y.onRequestError(e,t,r,i,q)},sharedContext:{buildId:R}},K=new l.NodeNextRequest(e),B=new l.NodeNextResponse(t),L=d.NextRequestAdapter.fromNodeNextRequest(K,(0,d.signalFromNodeResponse)(t));try{let s=async e=>y.handle(L,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=M.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${U} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${x}`)}),o=!!(0,i.getRequestMeta)(e,"minimalMode"),l=async i=>{var n,l;let d=async({previousCacheEntry:a})=>{try{if(!o&&P&&N&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await s(i);e.fetchMetrics=F.renderOpts.fetchMetrics;let l=F.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let d=F.renderOpts.collectedTags;if(!_)return await (0,u.sendResponse)(K,B,n,F.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[m.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,r=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await y.onRequestError(e,t,{routerKind:"App Router",routePath:x,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:P})},!1,q),t}},c=await y.handleResponse({req:e,nextConfig:E,cacheKey:O,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:P,revalidateOnlyGenerated:N,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:o});if(!_)return null;if((null==c||null==(n=c.value)?void 0:n.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",P?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let h=(0,f.fromNodeOutgoingHttpHeaders)(c.value.headers);return o&&_||h.delete(m.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||h.get("Cache-Control")||h.set("Cache-Control",(0,g.getCacheControlHeader)(c.cacheControl)),await (0,u.sendResponse)(K,B,new Response(c.value.body,{headers:h,status:c.value.status||200})),null};j?await l(j):await M.withPropagatedContext(e.headers,()=>M.trace(c.BaseServerSpan.handleRequest,{spanName:`${U} ${x}`,kind:n.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof h.NoFallbackError||await y.onRequestError(e,t,{routerKind:"App Router",routePath:S,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:P})},!1,q),_)throw t;return await (0,u.sendResponse)(K,B,new Response(null,{status:500})),null}}e.s(["handler",()=>q,"patchFetch",()=>T,"routeModule",()=>y,"serverHooks",()=>C,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>A],85266)}];

//# sourceMappingURL=c0582_next_dist_esm_build_templates_app-route_8c99647c.js.map
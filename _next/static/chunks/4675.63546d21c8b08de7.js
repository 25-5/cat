"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4675],{84675:function(a,r,e){e.r(r),e.d(r,{shadowMapFragmentSoftTransparentShadow:function(){return s}});var n=e(35606);let t="shadowMapFragmentSoftTransparentShadow",o=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alpha) discard;
#endif
`;n.v.IncludesShadersStore[t]=o;let s={name:t,shader:o}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1623],{61623:function(a,n,r){r.r(n),r.d(n,{shadowMapFragmentSoftTransparentShadowWGSL:function(){return o}});var e=r(35606);let t="shadowMapFragmentSoftTransparentShadow",s=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alpha) {discard;}
#endif
`;e.v.IncludesShadersStoreWGSL[t]=s;let o={name:t,shader:s}}}]);
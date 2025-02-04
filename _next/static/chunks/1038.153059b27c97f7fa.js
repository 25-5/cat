"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1038],{91038:function(r,e,l){l.r(e),l.d(e,{bloomMergePixelShader:function(){return a}});var o=l(35606);let t="bloomMergePixelShader",u=`uniform sampler2D textureSampler;uniform sampler2D bloomBlur;varying vec2 vUV;uniform float bloomWeight;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec3 blurred=texture2D(bloomBlur,vUV).rgb;gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight); }
`;o.v.ShadersStore[t]=u;let a={name:t,shader:u}}}]);
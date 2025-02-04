"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4810],{64810:function(e,r,n){n.r(r),n.d(r,{rgbdEncodePixelShader:function(){return u}});var t=n(35606);n(54037);let i="rgbdEncodePixelShader",l=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;t.v.ShadersStore[i]=l;let u={name:i,shader:l}}}]);
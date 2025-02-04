"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9912],{49912:function(e,r,t){t.r(r),t.d(r,{rgbdDecodePixelShader:function(){return u}});var n=t(35606);t(54037);let i="rgbdDecodePixelShader",l=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;n.v.ShadersStore[i]=l;let u={name:i,shader:l}}}]);
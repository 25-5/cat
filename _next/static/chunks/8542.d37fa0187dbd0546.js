"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8542],{78542:function(e,r,l){l.r(r),l.d(r,{extractHighlightsPixelShader:function(){return i}});var t=l(35606);l(54037);let o="extractHighlightsPixelShader",a=`#include<helperFunctions>
varying vec2 vUV;uniform sampler2D textureSampler;uniform float threshold;uniform float exposure;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);float luma=dot(LuminanceEncodeApprox,gl_FragColor.rgb*exposure);gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;}`;t.v.ShadersStore[o]=a;let i={name:o,shader:a}}}]);
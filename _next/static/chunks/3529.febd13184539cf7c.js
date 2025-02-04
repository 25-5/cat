"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3529],{33529:function(e,r,a){a.r(r),a.d(r,{grainPixelShader:function(){return l}});var n=a(35606);a(54037);let t="grainPixelShader",i=`#include<helperFunctions>
uniform sampler2D textureSampler; 
uniform float intensity;uniform float animatedSeed;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec2 seed=vUV*(animatedSeed);float grain=dither(seed,intensity);float lum=getLuminance(gl_FragColor.rgb);float grainAmount=(cos(-PI+(lum*PI*2.))+1.)/2.;gl_FragColor.rgb+=grain*grainAmount;gl_FragColor.rgb=max(gl_FragColor.rgb,0.0);}`;n.v.ShadersStore[t]=i;let l={name:t,shader:i}}}]);
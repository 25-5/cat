"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3308],{83308:function(e,r,a){a.r(r),a.d(r,{displayPassPixelShader:function(){return n}});var s=a(35606);let l="displayPassPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D passSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(passSampler,vUV);}`;s.v.ShadersStore[l]=i;let n={name:l,shader:i}}}]);
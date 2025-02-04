"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{70304:function(e,r,t){t.r(r),t.d(r,{rgbdDecodePixelShaderWGSL:function(){return l}});var a=t(35606);t(57104);let u="rgbdDecodePixelShader",n=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV)),1.0);}`;a.v.ShadersStoreWGSL[u]=n;let l={name:u,shader:n}}}]);
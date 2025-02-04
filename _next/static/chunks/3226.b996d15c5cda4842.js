"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3226],{3226:function(e,r,t){t.r(r),t.d(r,{rgbdEncodePixelShaderWGSL:function(){return l}});var n=t(35606);t(57104);let a="rgbdEncodePixelShader",u=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`;n.v.ShadersStoreWGSL[a]=u;let l={name:a,shader:u}}}]);
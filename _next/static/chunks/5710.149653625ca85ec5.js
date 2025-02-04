"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5710],{25710:function(e,t,r){r.r(t),r.d(t,{passPixelShaderWGSL:function(){return p}});var a=r(35606);let u="passPixelShader",n=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;a.v.ShadersStoreWGSL[u]=n;let p={name:u,shader:n}}}]);
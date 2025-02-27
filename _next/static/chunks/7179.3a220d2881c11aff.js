"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7179],{17179:function(e,r,a){a.r(r),a.d(r,{glowMapMergePixelShaderWGSL:function(){return o}});var t=a(35606);let l="glowMapMergePixelShader",f=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef EMISSIVE
var textureSampler2Sampler: sampler;var textureSampler2: texture_2d<f32>;
#endif
uniform offset: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef EMISSIVE
baseColor+=textureSample(textureSampler2,textureSampler2Sampler,input.vUV);baseColor*=uniforms.offset;
#else
baseColor=vec4f(baseColor.rgb,abs(uniforms.offset-baseColor.a));
#ifdef STROKE
var alpha: f32=smoothstep(.0,.1,baseColor.a);baseColor=vec4f(baseColor.rgb*alpha,alpha);
#endif
#endif
#if LDR
baseColor=clamp(baseColor,vec4f(0.),vec4f(1.0));
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;t.v.ShadersStoreWGSL[l]=f;let o={name:l,shader:f}}}]);
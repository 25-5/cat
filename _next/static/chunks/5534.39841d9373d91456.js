"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5534],{41261:function(e,r,t){t(35606).v.IncludesShadersStoreWGSL.kernelBlurVaryingDeclaration="varying sampleCoord{X}: vec2f;"},55534:function(e,r,t){t.r(r),t.d(r,{kernelBlurVertexShaderWGSL:function(){return i}});var n=t(35606);t(41261),n.v.IncludesShadersStoreWGSL.kernelBlurVertex="vertexOutputs.sampleCoord{X}=vertexOutputs.sampleCenter+uniforms.delta*KERNEL_OFFSET{X};";let u="kernelBlurVertexShader",a=`attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;n.v.ShadersStoreWGSL[u]=a;let i={name:u,shader:a}}}]);
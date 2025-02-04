"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1713],{91713:function(e,t,i){i.r(t),i.d(t,{hdrFilteringVertexShaderWGSL:function(){return u}});var n=i(35606);let r="hdrFilteringVertexShader",f=`attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;n.v.ShadersStoreWGSL[r]=f;let u={name:r,shader:f}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3176],{93176:function(e,n,r){r.r(n),r.d(n,{colorPixelShaderWGSL:function(){return o}});var i=r(35606);r(78122),r(38632),r(56506),r(59712);let t="colorPixelShader",f=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vColor: vec4f;
#else
uniform color: vec4f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
fragmentOutputs.color=input.vColor;
#else
fragmentOutputs.color=uniforms.color;
#endif
#include<fogFragment>(color,fragmentOutputs.color)
#define CUSTOM_FRAGMENT_MAIN_END
}`;i.v.ShadersStoreWGSL[t]=f;let o={name:t,shader:f}}}]);
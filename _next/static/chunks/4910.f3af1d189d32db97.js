"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4910],{24910:function(t,e,i){i.r(e),i.d(e,{iblVoxelGridVertexShaderWGSL:function(){return u}});var r=i(35606);let o="iblVoxelGridVertexShader",n=`attribute position: vec3f;attribute normal: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.viewMatrix*uniforms.invWorldScale*uniforms.world* vec4f(input.position,1.);vertexOutputs.vNormalizedPosition=vertexOutputs.position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
vertexOutputs.position=vec4f(vertexOutputs.position.x,vertexOutputs.position.y,vertexOutputs.position.z*0.5+0.5,vertexOutputs.position.w);
#endif
}`;r.v.ShadersStoreWGSL[o]=n;let u={name:o,shader:n}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7642],{37642:function(i,o,e){e.r(o),e.d(o,{iblVoxelGridVertexShader:function(){return l}});var t=e(35606);let r="iblVoxelGridVertexShader",n=`attribute vec3 position;attribute vec3 normal;varying vec3 vNormalizedPosition;uniform mat4 world;uniform mat4 invWorldScale;uniform mat4 viewMatrix;void main(void) {gl_Position=viewMatrix*invWorldScale*world*vec4(position,1.);vNormalizedPosition.xyz=gl_Position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
gl_Position.z=gl_Position.z*0.5+0.5;
#endif
}`;t.v.ShadersStore[r]=n;let l={name:r,shader:n}}}]);
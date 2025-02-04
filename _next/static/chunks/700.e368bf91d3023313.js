"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{50700:function(e,i,r){r.r(i),r.d(i,{hdrIrradianceFilteringVertexShader:function(){return c}});var n=r(35606);let t="hdrIrradianceFilteringVertexShader",o=`attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;n.v.ShadersStore[t]=o;let c={name:t,shader:o}}}]);
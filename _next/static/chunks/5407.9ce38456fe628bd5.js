"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5407],{55407:function(e,r,t){t.r(r),t.d(r,{filterPixelShader:function(){return i}});var a=t(35606);let l="filterPixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;uniform mat4 kernelMatrix;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec3 baseColor=texture2D(textureSampler,vUV).rgb;vec3 updatedColor=(kernelMatrix*vec4(baseColor,1.0)).rgb;gl_FragColor=vec4(updatedColor,1.0);}`;a.v.ShadersStore[l]=o;let i={name:l,shader:o}}}]);